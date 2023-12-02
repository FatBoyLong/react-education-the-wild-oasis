import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://nunxoavszdpvzlkhncmp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im51bnhvYXZzemRwdnpsa2huY21wIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM5OTY5MjAsImV4cCI6MjAwOTU3MjkyMH0.LOZZgtEGpR9p4FsV1yj3uCGazSSe4eNNzXLfAdXq8Ck";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
