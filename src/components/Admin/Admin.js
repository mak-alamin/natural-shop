import React from "react";

import Header from "./Header/Header";
import MainPanel from "./MainPanel/MainPanel";
import Sidebar from "./Sidebar/Sidebar";

import Footer from "./Footer/Footer";

const Admin = () => {
  return (
    <div className="container-scroller">
      <Header></Header>
      <div className="container-fluid page-body-wrapper">
        <Sidebar></Sidebar>

        <div className="main-panel">
          <div className="content-wrapper">
            <MainPanel></MainPanel>
          </div>
          <Footer></Footer>
        </div>
        
      </div>
    </div>
  );
};

export default Admin;
