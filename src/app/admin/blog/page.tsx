"use client";
import { IBlog } from "@/features/blog/types";
import { GetBlogs } from "@/services/blogs";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function AdminBlogPage() {
  const [blogs, setBlogs] = useState<IBlog[]>([]);

  const onFetchDataBlog = async () => {
    try {
      const response = await GetBlogs();
      setBlogs(response.data.data);
    } catch (error) {
      toast.error(`Failed to fetch: ${error}`);
    }
  };

  useEffect(() => {
    onFetchDataBlog();
  }, []);

  return (
    <>
      <div className="mx-auto w-11/12 my-10">
        <div className="flex">
          <h1 className="text-2xl">List Blog</h1>
          <Link
            href="/admin/blog/create"
            className="btn btn-sm btn-neutral ml-auto text-slate-50"
          >
            Tambah Blog
          </Link>
        </div>
        <div className="overflow-x-auto my-5">
          <table className="table table-zebra border border-gray-100">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Image</th>
                <th>Title</th>
                <th>#</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog, i) => {
                return (
                  <tr key={i}>
                    <th>{i + 1}</th>
                    <td>
                      <div className="w-30 h-30 relative">
                        <Image
                          src={blog.image}
                          alt={blog.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </td>
                    <td>{blog.title}</td>
                    <td>
                      <Link
                        href={"#"}
                        className="btn btn-success btn-sm text-white hover:shadow-md mx-2 my-2"
                      >
                        Detail
                      </Link>
                      <Link
                        href={"#"}
                        className="btn btn-info btn-sm text-white hover:shadow-md mx-2 my-2"
                      >
                        Update
                      </Link>
                      <Link
                        href={"#"}
                        className="btn btn-error btn-sm text-white hover:shadow-md mx-2 my-2"
                      >
                        Delete
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
