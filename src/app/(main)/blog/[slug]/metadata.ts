import { Metadata } from "next";
import { GetDetailBlog } from "@/services/blogs";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const blog = await GetDetailBlog(params?.slug);

  return {
    title: `${blog.data.title}`,
    description: `${blog.data.description}`,
    keywords: [`${blog.data.title}`],
    authors: [
      {
        name: "Redesign Company Profile",
        url: "https://company-profile-redesign.vercel.app/about-us",
      },
    ],
    creator: "Redesign Company Profile",
    publisher: "Redesign Company Profile",
    openGraph: {
      title: `${blog.data.title}`,
      description: `${blog.data.description}`,
      url: `https://company-profile-redesign.vercel.app/blog/${params.slug}`,
      siteName: "Redesign Company Profile",
      locale: "id_ID",
      type: "website",
      images: [
        {
          url: "https://company-profile-redesign.vercel.app/images/uber_logo.png",
          width: 1200,
          height: 630,
          alt: "Redesign Company Profile",
        },
      ],
    },
  };
}
