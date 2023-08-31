import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const getUser = async () => {
    const supabase = createServerActionClient({cookies});
    const user = await supabase.from("user").select("*");
    return user.data[0];
}