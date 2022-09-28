import { Menu } from "@headlessui/react";
import Link from "next/link";
import React from "react";
import ButtonNavbar from "./ButtonNavbar";

const links = [
  { href: "/ourstory", label: "Our story" },
  { href: "/membership", label: "Membership" },
  { href: "/write", label: "Write" },
  { href: "/signin", label: "Sign In" },
];
const NavbarMenu = () => {
  return (
    <div className="bg-[rgb(255,192,23)] border-b border-black">
      <div className="  mx-auto   max-w-4xl px-2 ">
        <div className="flex items-center justify-between h-16 ">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link className=" " href="/">
              <span className="font-serif text-gray-800">Medium</span>
            </Link>
          </div>
          <div className="md:flex md:items-center md:gap-12">
            <div
              className="hidden md:block"
              aria-labelledby="header-navigation"
            >
              <h2 className="sr-only" id="header-navigation">
                Header navigation
              </h2>
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="/"
                  >
                    Our story
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="/"
                  >
                    Membership
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="/"
                  >
                    Write
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="/"
                  >
                    Sign In
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-4">
              <div className="sm:gap-4 sm:flex">
                <div className="hidden sm:flex">
                  <Link
                    className="px-5 py-2.5 text-sm font-medium text-teal-600 bg-gray-100 rounded-md"
                    href="/"
                  >
                    <ButtonNavbar />
                  </Link>
                </div>
              </div>
              <Menu as="div" className="block sm:hidden">
                <Menu.Button>
                  <div className="block">
                    <div className="p-2 text-gray-600 transition bg-gray-100 rounded hover:text-gray-600/75">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    </div>
                  </div>
                </Menu.Button>
                <Menu.Items className="absolute top-20 left-3 right-3 bg-white rounded divide divide-gray-100 shadow ">
                  {links.map((link) => (
                    /* Use the `active` state to conditionally style the active item. */
                    <Menu.Item key={link.href} as="div">
                      {({ active }) => (
                        <Link href="#">
                          <div
                            className={`flex py-3 px-6 ${
                              active ? "bg-gray-100" : ""
                            }`}
                          >
                            {link.label}
                          </div>
                        </Link>
                      )}
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </Menu>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarMenu;
