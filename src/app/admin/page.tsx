"use client";
import { authStore } from "@/store/auth.store";

export default function AdminPage() {
  const auth = authStore();
  return (
    <>
      <div className="mx-auto w-11/12 my-10">
        <h1 className="text-2xl">Hello, {auth.auth.username}</h1>
      </div>
    </>
  );
}
