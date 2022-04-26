import React from "react";
import Header from "./Header/Header";
import MainPanel from "./MainPanel/MainPanel";
import Sidebar from "./Sidebar/Sidebar";

const Admin = () => {
  return (
    <div className="container-scroller">
      <Header></Header>
      <div className="container-fluid page-body-wrapper">
        <Sidebar></Sidebar>
        <MainPanel></MainPanel>
      </div>
    </div>
  );
};

export default Admin;
