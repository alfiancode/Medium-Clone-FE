import React from "react";
import FooterPage from "./FooterPage";
import NavbarMenu from "./NavbarMenu";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="flex flex-col min-h-screen mx-auto  bg-slate-100">
        <NavbarMenu />
        <div className="flex-1  ">{children}</div>
        <FooterPage />
      </div>
    </div>
  );
};
export default Layout;
