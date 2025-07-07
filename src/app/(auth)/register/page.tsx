"use client";
import { registerValidationSchema } from "@/features/auth/register/schema/registerValidationSchema";
import { IRegister } from "@/features/auth/register/types";
import { Register } from "@/services/auth";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function RegisterPage() {
  const router = useRouter();

  const onRegisterUser = async ({ username, email, password }: IRegister) => {
    try {
      const data = { username: username, email: email, password: password };
      const response = await Register(data);
      // return response;
      if (response.status == 201) {
        toast.success(response.data.message);
        router.push("/login");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        const message =
          error?.response?.data.message || "A server error occurred.";
        toast.error(message);
      } else {
        toast.error("Unexpected error occurred.");
        console.log(error);
      }
    }
  };

  return (
    <div className="flex justify-center my-70">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <h1 className="text-center font-bold text-base">Register</h1>

        <Formik
          initialValues={{ username: "", email: "", password: "" }}
          validationSchema={registerValidationSchema}
          onSubmit={(values) => {
            onRegisterUser({
              username: values.username,
              email: values.email,
              password: values.password,
            });
          }}
        >
          <Form>
            <label htmlFor="username" className="label">
              Username
            </label>
            <Field
              type="text"
              className="input"
              name="username"
              id="username"
              placeholder="Input your username"
            />
            <ErrorMessage
              name="username"
              className="text-red-500"
              component={"div"}
            />

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
              Register
            </button>
          </Form>
        </Formik>
        <p>
          {"Don't have an account? "}
          <Link href="/login" className="text-blue-800">
            Login
          </Link>
        </p>
      </fieldset>
    </div>
  );
}
