import Backendless from "@/lib/backendless";
import { NextRequest, NextResponse } from "next/server";
import { TABLE_NAME_BLOGS } from "../route";
import { IBlog } from "@/features/blog/types";
import slugify from "slugify";

export async function GET(
  _: NextRequest,
  { params }: { params: { blogId: string } }
) {
  try {
    const { blogId } = await params;

    const queryBuilder = Backendless.DataQueryBuilder.create().setWhereClause(
      `slug = '${blogId}'`
    );
    const response = (await Backendless.Data.of(TABLE_NAME_BLOGS).findFirst(
      queryBuilder
    )) as IBlog;

    console.log(">>>", response);
    if (response === undefined) {
      return NextResponse.json(
        {
          status: "fail",
          message: "Failed Get Data Blog, Data Not Found",
        },
        { status: 404 }
      );
    }

    const responseData = {
      id: response.objectId,
      title: response.title,
      slug: response.slug,
      description: response.description,
      image: response.image,
      created_by: response.created_by,
      created_at: response.created,
    };

    return NextResponse.json(
      {
        message: `Get product detail successfull`,
        data: responseData,
      },
      { status: 200 }
    );
  } catch (error) {
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

export async function PUT(
  req: NextRequest,
  { params }: { params: { blogId: string } }
) {
  try {
    const { blogId } = await params;

    const { title, image, description } = await req.json();

    const response = (await Backendless.Data.of(TABLE_NAME_BLOGS).save({
      objectId: blogId,
      title: title,
      slug: slugify(title, { lower: true }),
      image: image,
      description: description,
    })) as IBlog;

    const responseData = {
      id: response.objectId,
      title: response.title,
      slug: response.slug,
      description: response.description,
      image: response.image,
      created_by: response.created_by,
      created_at: response.created,
    };

    return NextResponse.json(
      {
        status: "success",
        message: "Blog updated successfully",
        data: responseData,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        status: "error",
        message: "Failed to update blog. Please try again later.",
      },
      { status: 500 }
    );
  }
}
