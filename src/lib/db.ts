import { createClient } from "@supabase/supabase-js";
import { Database } from "@/lib/types/db.types";

export default createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
);
