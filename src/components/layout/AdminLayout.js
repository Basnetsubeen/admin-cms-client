import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import SideMenu from "../side-menu/SideMenu";

const AdminLayout = ({ children }) => {
  return (
    <div>
      {/* Header */}
      <Header />
      {/* Sidebar */}
      <SideMenu />
      {/* Main body */}
      <main style={{ minHeight: "80vh" }}>{children}</main>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AdminLayout;
