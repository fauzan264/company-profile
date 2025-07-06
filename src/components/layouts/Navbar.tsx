"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { authStore } from "@/store/auth.store";
import { FaUserCircle } from "react-icons/fa";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState("");
  const pathname = usePathname();

  const handleClick = (href: string) => {
    setActiveHref(href);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const nav_items = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/blog", label: "Blog" },
    { href: "/about-us", label: "About Us" },
    { href: "/team", label: "Teams" },
    { href: "/login", label: "Login" },
  ];

  const { auth } = authStore();

  return (
    <div
      className={`navbar fixed font-bold shadow-sm transition duration-300 left-0 top-0 z-99 px-10 ${
        isScrolled || pathname !== "/"
          ? "bg-black text-white"
          : "bg-transparent text-gray-100"
      }`}
    >
      <div className="navbar-start">
        {!pathname.startsWith("/admin") ? (
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <HiOutlineMenuAlt1 className="w-6 h-6" />
            </div>
            <ul
              tabIndex={0}
              className={`menu menu-sm dropdown-content rounded-b-box mt-3 w-52 p-2 shadow z-100 ${
                isScrolled ? "bg-black text-white" : "bg-base-100 text-black"
              }`}
            >
              {nav_items.map((nav_item, i) => {
                return (
                  <li key={i}>
                    <a href={nav_item.href}>{nav_item.label}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : (
          <label
            htmlFor="my-drawer"
            className="btn btn-ghost drawer-button lg:hidden"
          >
            <HiOutlineMenuAlt1 className="w-6 h-6" />
          </label>
        )}
        <Link href="/">
          <Image
            src="/images/uber-logo-white.webp"
            alt="uber"
            width={50}
            height={50}
          />
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal">
          {nav_items.map((nav_item, i) => {
            return (
              <li
                key={i}
                className={`rounded-md transition hover:bg-gray-100 hover:text-black ${
                  auth && nav_item.href == "/login" && "hidden"
                } ${
                  activeHref === nav_item.href ? "bg-slate-50 text-black" : ""
                }`}
              >
                <Link
                  onClick={() => {
                    handleClick(nav_item.href);
                  }}
                  href={nav_item.href}
                >
                  {nav_item.label}
                </Link>
              </li>
            );
          })}
        </ul>
        {auth.username && (
          <div className="avatar">
            <div className="w-7 rounded-full">
              <FaUserCircle className="w-full h-full" />
            </div>
            <span className="ml-3 my-auto">{auth.username}</span>
          </div>
        )}
      </div>
    </div>
  );
}

// berarti buat pengkondisian di sini untuk halaman utama dan admin

// localstate mirip global state, navbar memakai global state sehingga ketika terjadi perubahan dia akan render ulang dan melihat pengkondisian ulang

/**
 * session login, maka ketika kita sudah login, maka dianggap login
 * - untuk menerapkannya menggunakan localStorage
 * - di zustand dia punya metode Persistance: mengsinkronkan antara global state dengan browser storage
 * - harus ada kalo melakukan Persistance harus di Partialize: untuk mengatur data mana saja dari global state yang akan disimpan ke browser storage
 *
 */

/**
 * - Global state -> Zustand
 * - Login success -> store data ke global state <- username navbar global state
 * - Session login -> Browser storage(local storage) -> Zustand: persist & partialize
 * - role, username, dan email ngga boleh ditampilin di local storage karena data sensitif. sehingga bukan best practice. harusnya id
 */
