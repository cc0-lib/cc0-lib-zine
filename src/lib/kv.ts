"use server";

import { kv } from "@vercel/kv";

export const setMintState = async (state: string) => {
  await kv.set("zine-mint-state", state);
};

export const getMintState = async () => {
  return await kv.get("zine-mint-state");
};

export const setCountDownTime = async (time: string) => {
  await kv.set("zine-countdown-time", time);
};

export const getCountDownTime = async () => {
  return (await kv.get("zine-countdown-time")) as string;
};
