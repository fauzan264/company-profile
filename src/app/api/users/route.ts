import Backendless from "@/lib/backendless";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const query = Backendless.DataQueryBuilder.create().setSortBy([
      "created ASC",
    ]);
    const response = await Backendless.Data.of("tb_challenge_users").find(
      query
    );

    return NextResponse.json(
      {
        status: "success",
        message: "Successfully fetched user list",
        data: response,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        status: "error",
        message: "Failed to fetch user list. Please try again later.",
      },
      { status: 500 }
    );
  }
}
