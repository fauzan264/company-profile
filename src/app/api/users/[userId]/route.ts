import Backendless from "@/lib/backendless";
import { NextRequest, NextResponse } from "next/server";
import { IResponseUser } from "../../auth/login/route";

type Params = Promise<{ userId: string }>;

export async function GET(_: NextRequest, { params }: { params: Params }) {
  try {
    const { userId } = await params;

    const response = (await Backendless.Data.of("tb_challenge_users").findById(
      userId
    )) as IResponseUser;

    return NextResponse.json(
      {
        status: "success",
        message: "User fetched successfully",
        data: response,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        status: "error",
        message: "An error occurred while fetched the user data",
      },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest, { params }: { params: Params }) {
  try {
    const { userId } = await params;

    const { username, email, password } = await req.json();

    const requestData = {
      objectId: userId,
      username: username,
      email: email,
      password: password,
    };

    const response = (await Backendless.Data.of("tb_challenge_users").save(
      requestData
    )) as IResponseUser;

    const responseData = {
      id: response.objectId,
      username: response.username,
      email: response.email,
    };

    return NextResponse.json(
      {
        message: "User data updated successfully",
        data: responseData,
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      {
        message: "Failed to update user data",
      },
      { status: 500 }
    );
  }
}
