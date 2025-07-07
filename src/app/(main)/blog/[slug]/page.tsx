import { GetDetailBlog } from "@/services/blogs";
import Image from "next/image";
import { generateMetadata } from "./metadata";
export { generateMetadata };

export default async function DetailBlog({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await GetDetailBlog(slug);

  return (
    <div className="container mx-auto">
      <div className="relative w-full h-100 mt-20 overflow-hidden">
        <Image
          src={"/images/yiran-ding-unsplash.jpg"}
          layout="fill"
          alt="image"
          className="object-cover rounded-lg"
        />
      </div>
      {/* <BlogHero image={blog.data.image} /> */}
      <div className="container mx-auto px-5 mb-100 font-serif">
        <h1 className="text-3xl font-semibold my-5 uppercase text text-gray-700">
          {blog.data.title}
        </h1>
        <p className="text-lg text-gray-600">{blog.data.description}</p>
      </div>
    </div>
  );
}
