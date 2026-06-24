import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

// Bootstrap: first authenticated user with no existing admin becomes admin.
export const claimAdmin = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { supabase, userId } = context;

    const { data: alreadyAdmin } = await supabase.rpc("has_role", {
      _user_id: userId,
      _role: "admin",
    });
    if (alreadyAdmin) return { isAdmin: true };

    // Check if any admin exists yet (service role to bypass RLS)
    const { supabaseAdmin } = await import(
      "@/integrations/supabase/client.server"
    );
    const { count } = await supabaseAdmin
      .from("user_roles")
      .select("id", { count: "exact", head: true })
      .eq("role", "admin");

    if ((count ?? 0) > 0) return { isAdmin: false };

    const { error } = await supabaseAdmin
      .from("user_roles")
      .insert([{ user_id: userId, role: "admin" }]);
    if (error) throw new Error(error.message);

    return { isAdmin: true };
  });

export const getContactSubmissions = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { supabase, userId } = context;

    const { data: isAdmin } = await supabase.rpc("has_role", {
      _user_id: userId,
      _role: "admin",
    });
    if (!isAdmin) throw new Error("Forbidden");

    const { data, error } = await supabase
      .from("contact_submissions")
      .select("id, name, email, phone, message, created_at")
      .order("created_at", { ascending: false });
    if (error) throw new Error(error.message);

    return { submissions: data ?? [] };
  });
