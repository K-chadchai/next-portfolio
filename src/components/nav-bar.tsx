"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { PropNavLink } from "@/components/nav-link";
import NavLink from "@/components/nav-link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "@/components/menu-overlay";

const navLink: PropNavLink[] = [
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);

  return (
    <nav className="fixed top-0 left-0 border border-[#33353F] right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex flex-wrap lg:py-4 items-center justify-between mx-auto px-4 py-4">
        <Link
          href="/"
          className="text-2xl md:text-4xl font-semibold text-white pl-5"
        >
          CK
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => {
                setNavbarOpen(true);
              }}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => {
                setNavbarOpen(false);
              }}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        {/* md = ถ้าหน้าจอมีขนาดมากกว่า 786px ก็จะทำตามที่สั่ง แต่ถ้าน้อยกว่าก็จะไม่เข้าเงือนไข */}
        <div className="menu md:block hidden md:w-auto" id="navbar">
          {/* ใช้เป็น space-x-8 ได้ margin left, right */}
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLink.map((item, i) => {
              return (
                <li key={i}>
                  <NavLink href={item.href} title={item.title} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {navbarOpen && <MenuOverlay props={navLink} />}
    </nav>
  );
};

export default NavBar;
