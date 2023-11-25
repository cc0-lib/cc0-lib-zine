"use server";

import db from "@/lib/db";
import { FormDataType } from "./redeem";

type ResultType = {
  data: any | null;
  error: string | null;
};

export const submitForm = async (form: FormDataType): Promise<ResultType> => {
  const requiredFields = [
    "name",
    "address",
    "wallet_address",
    "token_id",
    "social",
  ];

  for (const field of requiredFields) {
    if (!form[field as keyof FormDataType]) {
      return {
        data: null,
        error: `${field.charAt(0).toUpperCase() + field.slice(1)} is required`,
      };
    }
  }

  if (typeof form.token_id !== "number") {
    return {
      data: null,
      error: "Token ID must be a number",
    };
  }

  try {
    const { data, error } = await db
      .from("zine-one")
      .insert([
        {
          name: form.name,
          email: form.email,
          //   social: form.social,
          address: form.address,
          wallet_address: form.wallet_address,
          token_id: form.token_id,
          created_at: new Date().toISOString(),
        },
      ])
      .select();

    if (error) {
      return {
        data: null,
        error: error.message,
      };
    }

    return {
      data,
      error: null,
    };
  } catch (error) {
    return {
      data: null,
      error: error as string,
    };
  }
};
