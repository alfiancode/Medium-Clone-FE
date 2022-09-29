import { Menu } from "@headlessui/react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import Banner from "../components/Banner";
import Layout from "../components/Layout";
import NewsSection from "../components/NewsSection";
import Trending from "../components/Trending";

export default function Home() {
  return (
    <Layout>
      <Banner />
      <Trending />
      {/* divider */}
      <div className="border-b-2 border-gray-200 my-8" />
      <NewsSection />
    </Layout>
    // <div>
    //   <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
    //     <div className="flex items-center justify-between h-16">
    //       <div className="flex-1 md:flex md:items-center md:gap-12">
    //         <Link className="block text-teal-600" href="/">
    //           <div>
    //             <span className="font-serif">Medium</span>
    //           </div>
    //         </Link>
    //       </div>
    //       <div className="md:flex md:items-center md:gap-12">
    //         <div
    //           className="hidden md:block"
    //           aria-labelledby="header-navigation"
    //         >
    //           <h2 className="sr-only" id="header-navigation">
    //             Header navigation
    //           </h2>
    //           <ul className="flex items-center gap-6 text-sm">
    //             <li>
    //               <Link
    //                 className="text-gray-500 transition hover:text-gray-500/75"
    //                 href="/"
    //               >
    //                 Our story
    //               </Link>
    //             </li>
    //             <li>
    //               <Link
    //                 className="text-gray-500 transition hover:text-gray-500/75"
    //                 href="/"
    //               >
    //                 Membership
    //               </Link>
    //             </li>
    //             <li>
    //               <Link
    //                 className="text-gray-500 transition hover:text-gray-500/75"
    //                 href="/"
    //               >
    //                 Write
    //               </Link>
    //             </li>
    //             <li>
    //               <Link
    //                 className="text-gray-500 transition hover:text-gray-500/75"
    //                 href="/"
    //               >
    //                 Sign In
    //               </Link>
    //             </li>
    //           </ul>
    //         </div>
    //         <div className="flex items-center gap-4">
    //           <div className="sm:gap-4 sm:flex">
    //             <div className="hidden sm:flex">
    //               <Link
    //                 className="px-5 py-2.5 text-sm font-medium text-teal-600 bg-gray-100 rounded-md"
    //                 href="/"
    //               >
    //                 Register
    //               </Link>
    //             </div>
    //           </div>
    //           <Menu as="div" className="block sm:hidden">
    //             <Menu.Button>
    //               <div className="block">
    //                 <div className="p-2 text-gray-600 transition bg-gray-100 rounded hover:text-gray-600/75">
    //                   <svg
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     className="w-5 h-5"
    //                     fill="none"
    //                     viewBox="0 0 24 24"
    //                     stroke="currentColor"
    //                     strokeWidth={2}
    //                   >
    //                     <path
    //                       strokeLinecap="round"
    //                       strokeLinejoin="round"
    //                       d="M4 6h16M4 12h16M4 18h16"
    //                     />
    //                   </svg>
    //                 </div>
    //               </div>
    //             </Menu.Button>
    //             <Menu.Items className="absolute top-20 left-3 right-3 bg-white rounded divide divide-gray-100 shadow ">
    //               {links.map((link) => (
    //                 /* Use the `active` state to conditionally style the active item. */
    //                 <Menu.Item key={link.href} as="div">
    //                   {({ active }) => (
    //                     <Link href="#">
    //                       <div
    //                         className={`flex py-3 px-6 ${
    //                           active ? "bg-gray-100" : ""
    //                         }`}
    //                       >
    //                         {link.label}
    //                       </div>
    //                     </Link>
    //                   )}
    //                 </Menu.Item>
    //               ))}
    //             </Menu.Items>
    //           </Menu>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
