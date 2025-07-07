"use client";
import { loginValidationSchema } from "@/features/auth/login/schema/loginValidationSchema";
import { Login } from "@/services/auth";
import { authStore } from "@/store/auth.store";
import axios from "axios";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function LoginPage() {
  const router = useRouter();
  const { setAuth } = authStore();

  const onLoginUser = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    try {
      const data = { email: email, password: password };
      const response = await Login(data);

      if (response.status == 200) {
        setAuth({
          email: response?.data?.data?.email,
          username: response?.data?.data?.username,
          userId: response?.data?.data?.id,
        });
        toast.success(response.data.message);
        router.push("/admin");
      }
    } catch (error) {
      console.log(error);
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
    <div className="flex justify-center my-80">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <h1 className="text-center font-bold text-base">Login</h1>

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={loginValidationSchema}
          onSubmit={(values) => {
            onLoginUser({
              email: values.email,
              password: values.password,
            });
          }}
        >
          <Form>
            <label htmlFor="email" className="label">
              Email
            </label>
            <Field
              type="email"
              className="input"
              name="email"
              id="email"
              placeholder="Input your email"
            />
            <ErrorMessage
              name="email"
              className="text-red-500"
              component={"div"}
            />

            <label htmlFor="password" className="label">
              Password
            </label>
            <Field
              type="password"
              className="input"
              name="password"
              id="password"
              placeholder="Input your password"
            />
            <ErrorMessage
              name="password"
              className="text-red-500"
              component={"div"}
            />

            <button type="submit" className="btn btn-neutral mt-4 w-full">
              Login
            </button>
          </Form>
        </Formik>
        <p>
          {"Don't have an account?"}
          <Link href="/register" className="text-blue-800">
            Register
          </Link>
        </p>
      </fieldset>
    </div>
  );
}
