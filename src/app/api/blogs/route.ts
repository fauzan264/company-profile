import Backendless from "@/lib/backendless";
import { NextRequest, NextResponse } from "next/server";
import slugify from "slugify";

export const TABLE_NAME_BLOGS = "tb_challenge_blogs"
export const emptyUUID = '00000000-0000-0000-0000-000000000000'

export interface IBlog {
  objectId: string,
  title: string,
  slug: string,
  description: string,
  image: string,
  created_by: string,
  created: string
}

export async function GET() {
  try {
    const query = Backendless.DataQueryBuilder.create().setSortBy(["created ASC"])
    const response = await Backendless.Data.of(TABLE_NAME_BLOGS).find(query)
  
    return NextResponse.json(
      {
        message: 'Get list blog successful',
        data: response
      },
      { status: 200 }
    )
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      {
        message: 'Something went wrong'
      },
      { status: 500 }
    )
  }
}

export async function POST(req: NextRequest) {
  try {
    const {
      title,
      image,
      description,
      created_by
    } = await req.json()

    const requestData = {
      title: title,
      slug: slugify(title, {lower: true}),
      image: image,
      description: description,
      // created_by: created_by
      created_by: emptyUUID
    }

    const response = await Backendless.Data.of(TABLE_NAME_BLOGS).save(requestData) as IBlog

    const responseData = {
      id: response.objectId,
      title: response.title,
      slug: response.slug,
      image: response.image,
      description: response.description,
      created_by: response.created_by,
      created_at: response.created
    }

    return NextResponse.json(
      {
        message: 'Create blog successful',
        data: responseData
      },
      { status: 201 }
    )

  } catch (error) {
    console.log(error)
    return NextResponse.json(
      {
        message: "Something went wrong"
      },
      { status: 500 }
    )
  }
}