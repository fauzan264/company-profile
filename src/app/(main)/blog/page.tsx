"use client";
import { GetBlogs } from "@/services/blogs";
import React, { useEffect, useState } from "react";
import BlogCard from "@/features/blog/components/BlogCard";
import { IBlog } from "@/features/blog/types";

export default function BlogPage() {
  const [blogs, setBlogs] = useState<IBlog[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await GetBlogs();
      setBlogs(response.data.data);
      setLoading(false);
    } catch (error) {
      console.log("Failed to fetch blogs: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto text-center my-100">
        <span className="loading loading-ring w-30"></span>
      </div>
    );
  }

  return (
    <>
      <div className="container my-30 mx-auto px-5">
        <h1 className="font-bold text-3xl">Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 my-10 gap-4">
          {blogs.map((blog, i) => (
            <React.Fragment key={i}>
              <BlogCard
                image={blog.image}
                title={blog.title}
                slug={blog.slug}
                created={blog.created}
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
}
