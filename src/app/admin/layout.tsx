// import Sidebar from "@/components/layouts/Sidebar";
import { authStore } from "@/store/auth.store";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const route = useRouter();
  const { auth } = authStore();

  if (auth) {
    route.push("/login");
  }

  const nav_items = [
    { href: "/admin/", label: "Dashboard" },
    { href: "/admin/blog", label: "Blog" },
  ];

  return (
    <div className="flex flex-1 pt-16">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center">
          {children}
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-slate-200 text-gray-300 min-h-full w-80 p-4 pt-18 md:pt-3">
            {nav_items.map((nav_item, i) => {
              return (
                <Link
                  key={i}
                  href={nav_item.href}
                  className="pt-5 text-gray-800 text-md font-semibold"
                >
                  {nav_item.label}
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
