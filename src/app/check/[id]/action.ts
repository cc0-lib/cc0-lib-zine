"use server";

import db from "@/lib/db";
import { revalidatePath } from "next/cache";

type ResultType = {
  claimed: boolean;
  error: string | null;
};

export const checkClaimed = async (tokenID: number): Promise<ResultType> => {
  const { data, error } = await db
    .from("zine-one")
    .select("token_id")
    .eq("token_id", tokenID);

  revalidatePath("/check/[id]", "page");

  if (error) {
    return {
      claimed: false,
      error: error.message,
    };
  }

  return {
    claimed: data.length > 0,
    error: null,
  };
};
