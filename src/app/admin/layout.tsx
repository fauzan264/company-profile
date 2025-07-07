"use client";
import Sidebar from "@/components/layouts/Sidebar";
import { authStore } from "@/store/auth.store";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const router = useRouter();

  const auth = authStore();

  useEffect(() => {
    if (auth.auth.userId == "") {
      router.push("/login");
    }
  }, [auth.auth.userId, router]);

  return <Sidebar>{children}</Sidebar>;
}
