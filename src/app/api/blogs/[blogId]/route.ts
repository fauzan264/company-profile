import Backendless from "backendless";
import { NextRequest, NextResponse } from "next/server";
import { TABLE_NAME_BLOGS } from "../route";
import { IBlog } from "../route";
import slugify from "slugify";

export async function GET(_: NextRequest, { params }: { params: { blogId: string } }) {
  try {
    const { blogId } = params

    const response = await Backendless.Data.of(TABLE_NAME_BLOGS).findById(blogId) as IBlog

    const responseData =  {
      id: response.objectId,
      title: response.title,
      slug: response.slug,
      description: response.description,
      image: response.image,
      created_by: response.created_by,
      created_at: response.created
    }

    return NextResponse.json(
      {
        message: `Get product detail successfull`,
        data: responseData
      },
      { status: 200 }
    )
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      {
        message: "Something went error"
      },
      { status: 500 }
    )
  }
}

export async function PUT(req: NextRequest, { params }: { params: { blogId: string } }) {
  try {
    const { blogId } = await params;
    
    const {
      title,
      image,
      description
    } = await req.json()
  
    const response = await Backendless.Data.of(TABLE_NAME_BLOGS).save({
      objectId: blogId,
      title: title,
      slug: slugify(title, { lower: true }),
      image: image,
      description: description
    }) as IBlog
    
    const responseData = {
      id: response.objectId,
      title: response.title,
      slug: response.slug,
      description: response.description,
      image: response.image,
      created_by: response.created_by,
      created_at: response.created
    }
  
    return NextResponse.json(
      {
        message: `Update blog successful`,
        data: responseData
      },
      { status: 200 }
    )
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      {
        message: 'Something went error'
      },
      { status: 500 }
    )
  }
}