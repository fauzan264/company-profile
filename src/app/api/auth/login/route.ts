import { NextRequest, NextResponse } from "next/server";
import Backendless from "@/lib/backendless";

export const TABLE_NAME_USERS = "tb_challenge_users";

export interface IResponseUser {
  objectId: string;
  username: string;
  email: string;
}

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    const queryBuilder = Backendless.DataQueryBuilder.create().setWhereClause(
      `email = '${email}' AND password = '${password}'`
    );
    // .setWhereClause(`password = ${password}`)

    const response = (await Backendless.Data.of(TABLE_NAME_USERS).findFirst(
      queryBuilder
    )) as IResponseUser;

    if (!response) {
      return NextResponse.json(
        {
          status: "fail",
          message: `Login failed. Invalid email or password.`,
        },
        { status: 401 }
      );
    }

    const responseData = {
      id: response.objectId,
      username: response.username,
      email: response.email,
    };

    return NextResponse.json(
      {
        status: "success",
        message: `Login successful`,
        data: responseData,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        status: "error",
        message: "An internal server error occurred. Please try again later.",
      },
      { status: 500 }
    );
  }
}
