import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "الاسم مطلوب").max(100),
  email: z.string().trim().email("بريد إلكتروني غير صالح").max(255).optional(),
  phone: z.string().trim().max(50).optional(),
  message: z.string().trim().min(1, "الرسالة مطلوبة").max(2000),
});

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((data) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const supabase = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_PUBLISHABLE_KEY!,
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false,
        },
      }
    );

    const { error } = await supabase
      .from("contact_submissions")
      .insert([data]);

    if (error) {
      throw new Error(error.message);
    }

    return { success: true };
  });
