GRANT INSERT ON public.contact_submissions TO anon;

CREATE POLICY "Allow public contact form submissions" ON public.contact_submissions
  FOR INSERT TO anon WITH CHECK (true);