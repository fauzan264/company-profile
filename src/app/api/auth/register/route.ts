import Backendless from "@/lib/backendless";
import { NextRequest, NextResponse } from "next/server";
import { TABLE_NAME_USERS } from "../login/route";

export async function POST(req: NextRequest) {
  try {
    const { username, email, password } = await req.json();

    const response = await Backendless.Data.of(TABLE_NAME_USERS).save({
      username: username,
      email: email,
      password: password,
    });

    return NextResponse.json(
      {
        status: "success",
        message: "User registered successfully",
        data: response,
      },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      return NextResponse.json(
        {
          status: "error",
          message: error?.message,
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        status: "error",
        message: "Unexpected server error",
      },
      { status: 500 }
    );
  }
}
