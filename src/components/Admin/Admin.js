import React from "react";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";

const Admin = () => {
  return (
    <div className="container-scroller">
      <Header></Header>
      <div className="container-fluid page-body-wrapper">
        <Sidebar></Sidebar>
      </div>
    </div>
  );
};

export default Admin;
