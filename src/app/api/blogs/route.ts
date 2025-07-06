import Backendless from "@/lib/backendless";
import { NextRequest, NextResponse } from "next/server";
import slugify from "slugify";
import { IBlog } from "@/features/blog/types";

export async function GET() {
  try {
    const query = Backendless.DataQueryBuilder.create().setSortBy([
      "created ASC",
    ]);
    const response = await Backendless.Data.of("tb_challenge_blogs").find(
      query
    );

    return NextResponse.json(
      {
        status: "success",
        message: "Successfully fetched blog list",
        data: response,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        status: "error",
        message: "Failed to fetch blog list. Please try again later.",
      },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const { title, image, description, created_by } = await req.json();

    const requestData = {
      title: title,
      slug: slugify(title, { lower: true }),
      image: image,
      description: description,
      created_by: created_by,
    };

    const response = (await Backendless.Data.of("tb_challenge_blogs").save(
      requestData
    )) as IBlog;

    const responseData = {
      id: response.objectId,
      title: response.title,
      slug: response.slug,
      image: response.image,
      description: response.description,
      created_by: response.created_by,
      created_at: response.created,
    };

    return NextResponse.json(
      {
        status: "success",
        message: "Blog created successfully",
        data: responseData,
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.log(error);
    return NextResponse.json(
      {
        status: "error",
        message: `${error}`,
      },
      { status: 500 }
    );
  }
}
