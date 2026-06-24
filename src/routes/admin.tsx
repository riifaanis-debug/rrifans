import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { supabase } from "@/integrations/supabase/client";
import { claimAdmin, getContactSubmissions } from "@/lib/admin.functions";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [{ title: "الرسائل الواردة | لوحة الإدارة" }],
  }),
  component: AdminPage,
});

interface Submission {
  id: string;
  name: string;
  email: string | null;
  phone: string | null;
  message: string;
  created_at: string;
}

function AdminPage() {
  const navigate = useNavigate();
  const claim = useServerFn(claimAdmin);
  const fetchSubs = useServerFn(getContactSubmissions);
  const [state, setState] = useState<"loading" | "denied" | "ready" | "error">(
    "loading",
  );
  const [subs, setSubs] = useState<Submission[]>([]);

  useEffect(() => {
    (async () => {
      const { data } = await supabase.auth.getSession();
      if (!data.session) {
        navigate({ to: "/auth" });
        return;
      }
      try {
        const claimRes = await claim();
        if (!claimRes.isAdmin) {
          setState("denied");
          return;
        }
        const res = await fetchSubs();
        setSubs(res.submissions as Submission[]);
        setState("ready");
      } catch {
        setState("error");
      }
    })();
  }, [navigate, claim, fetchSubs]);

  const signOut = async () => {
    await supabase.auth.signOut();
    navigate({ to: "/auth" });
  };

  return (
    <div dir="rtl" className="min-h-screen bg-background px-4 py-10">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-foreground">الرسائل الواردة</h1>
          <button
            onClick={signOut}
            className="rounded-lg border border-border px-4 py-2 text-sm text-foreground hover:bg-muted"
          >
            تسجيل الخروج
          </button>
        </div>

        {state === "loading" && (
          <p className="text-muted-foreground">جارٍ التحميل...</p>
        )}
        {state === "denied" && (
          <p className="text-destructive">
            هذا الحساب لا يملك صلاحية الوصول إلى الرسائل.
          </p>
        )}
        {state === "error" && (
          <p className="text-destructive">تعذّر تحميل الرسائل.</p>
        )}
        {state === "ready" && subs.length === 0 && (
          <p className="text-muted-foreground">لا توجد رسائل حتى الآن.</p>
        )}
        {state === "ready" && subs.length > 0 && (
          <div className="space-y-4">
            {subs.map((s) => (
              <div
                key={s.id}
                className="rounded-xl border border-border bg-card p-5"
              >
                <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                  <span className="font-semibold text-foreground">{s.name}</span>
                  <span className="text-xs text-muted-foreground">
                    {new Date(s.created_at).toLocaleString("ar-SA")}
                  </span>
                </div>
                <div className="mb-3 flex flex-wrap gap-4 text-sm text-muted-foreground">
                  {s.phone && <span>📱 {s.phone}</span>}
                  {s.email && <span>✉️ {s.email}</span>}
                </div>
                <p className="whitespace-pre-wrap text-foreground">{s.message}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
