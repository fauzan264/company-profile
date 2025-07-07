import api from "@/lib/axios";

const GetBlogs = async () => {
  const response = await api.get(`/blogs`);
  return response;
};

const CreateBlog = async ({
  title,
  image,
  description,
  created_by,
}: {
  title: string;
  image: string;
  description: string;
  created_by: string;
}) => {
  const data = {
    title: title,
    image: image,
    description: description,
    created_by: created_by,
  };

  const response = await api.post(`/blogs`, data);
  return response;
};

const UpdateBlog = async ({
  id,
  title,
  image,
  description,
  created_by,
}: {
  id: string;
  title: string;
  image: string;
  description: string;
  created_by: string;
}) => {
  const data = {
    title: title,
    image: image,
    description: description,
    created_by: created_by,
  };

  const response = await api.put(`/users/${id}`, data);
  return response;
};

const GetDetailBlog = async (slug: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/blogs/${slug}`,
    {
      cache: "no-cache",
    }
  );

  const blog = await response.json();

  return blog;
};

export { GetBlogs, CreateBlog, UpdateBlog, GetDetailBlog };
