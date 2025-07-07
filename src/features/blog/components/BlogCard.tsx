import Image from "next/image";
import Link from "next/link";
import { IBlog } from "../types";

export default function BlogCard({
  image,
  title,
  slug,
  created,
}: Pick<IBlog, "image" | "title" | "slug" | "created">) {
  const date = new Date(created);

  const formattedDateToString = date.toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link href={`/blog/${slug}`}>
      <div className="card bg-base-100 w-full min-h-96 shadow-sm my-5 cursor-pointer transition duration-300 ease-in-out hover:shadow-2xl">
        <figure className="w-full h-60 block relative">
          <Image src={image} alt={title} className="object-cover" fill />
        </figure>
        <div className="card-body min-h-52">
          <h2 className="card-title mb-5">{title}</h2>
          <div className="mt-auto text-gray-400">{formattedDateToString}</div>
        </div>
      </div>
    </Link>
  );
}
