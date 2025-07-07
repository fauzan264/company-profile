"use client";
import { blogValidationSchema } from "@/features/admin/blog/schema/blogValidationSchema";
import { CreateBlog } from "@/services/blogs";
import { authStore } from "@/store/auth.store";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function AdminBlogCreatePage() {
  const auth = authStore();
  const router = useRouter();

  const onCreateBlog = async ({
    title,
    description,
  }: {
    title: string;
    description: string;
  }) => {
    try {
      const data = {
        title: title,
        image: "/images/yiran-ding-unsplash.jpg",
        description: description,
        created_by: auth.auth.userId,
      };

      const response = await CreateBlog(data);

      if (response.status == 201) {
        toast.success(response.data.message);
        router.push("/admin/blog");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message =
          error?.response?.data.message || "A server error occured.";
        toast.error(message);
      } else {
        toast.error("Unexpected error occured.");
      }
    }
  };

  return (
    <>
      <div className="mx-auto w-11/12 my-10">
        <h1 className="text-2xl">Create Blog</h1>
        <div className="my-5">
          <Formik
            initialValues={{
              title: "",
              // image: "",
              description: "",
            }}
            validationSchema={blogValidationSchema}
            onSubmit={(values) => {
              onCreateBlog({
                title: values.title,
                description: values.description,
              });
            }}
          >
            <Form action="">
              <fieldset className="fieldset w-full border-0">
                <label className="label">Title</label>
                <Field
                  type="text"
                  name="title"
                  className="input w-96"
                  placeholder="My awesome page"
                />
                <ErrorMessage
                  name="title"
                  className="text-red-500"
                  component={"div"}
                />

                {/* <label className="label">Image</label>
                <Field type="file" name="image" className="file-input w-96" />
                <ErrorMessage name="title" className="text-red-500" component={"div"} /> */}

                <label className="label">Description</label>
                <Field
                  as="textarea"
                  name="description"
                  placeholder="Bio"
                  className="textarea textarea-md w-96"
                />
                <ErrorMessage
                  name="title"
                  className="text-red-500"
                  component={"div"}
                />
                <button className="btn btn-neutral w-96">Submit</button>
              </fieldset>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
}
