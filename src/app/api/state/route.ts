import { getMintState, setCountDownTime, setMintState } from "@/lib/kv";
import { NextRequest, NextResponse } from "next/server";

const PASS_KEY = "kucingjalanan";

export const GET = async (req: NextRequest) => {
  return NextResponse.json(
    {
      data: "what are you doing here?",
    },
    {
      status: 400,
    },
  );
};

export const POST = async (req: NextRequest) => {
  const {
    pass,
    type,
    data,
  }: {
    pass: string;
    type: string;
    data: {
      state: string;
      time: string;
    };
  } = await req.json();

  if (!pass || !type) {
    return NextResponse.json({ error: "invalid body" }, { status: 400 });
  }

  const allowedTypes = ["get", "set", "set-time"];

  if (!allowedTypes.includes(type) || !type) {
    return NextResponse.json({ error: "invalid type" }, { status: 400 });
  }

  if (type === "get") {
    if (pass === PASS_KEY) {
      try {
        const res = await getMintState();
        return NextResponse.json({
          state: res,
          success: true,
        });
      } catch (error) {
        return NextResponse.json({ error, success: false }, { status: 400 });
      }
    } else {
      return NextResponse.json({ error: "wrong password" }, { status: 400 });
    }
  }

  if (type === "set") {
    if (pass === PASS_KEY) {
      if (!data) {
        return NextResponse.json({ error: "invalid data" }, { status: 400 });
      }
      try {
        await setMintState(data.state);
        return NextResponse.json({
          state: data.state,
          success: true,
        });
      } catch (error) {
        return NextResponse.json({ error, success: false }, { status: 400 });
      }
    } else {
      return NextResponse.json({ error: "wrong password" }, { status: 400 });
    }
  }

  if (type === "set-time") {
    if (pass === PASS_KEY) {
      if (!data) {
        return NextResponse.json({ error: "invalid data" }, { status: 400 });
      }
      try {
        await setCountDownTime(data.time);
        return NextResponse.json({
          time: data.time,
          success: true,
        });
      } catch (error) {
        return NextResponse.json({ error, success: false }, { status: 400 });
      }
    } else {
      return NextResponse.json({ error: "wrong password" }, { status: 400 });
    }
  }

  return NextResponse.json({
    hello: "this is from the post",
  });
};
