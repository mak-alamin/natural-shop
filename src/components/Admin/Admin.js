import React from "react";
import "./assets/css/style.css";
import "./assets/vendors/base/vendor.bundle.base.css";
import "./assets/vendors/datatables.net-bs4/dataTables.bootstrap4.css";
import "./assets/vendors/mdi/css/materialdesignicons.min.css";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import MainPanel from "./MainPanel/MainPanel";
import Sidebar from "./Sidebar/Sidebar";

const Admin = () => {
  return (
    <>
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
    </>
  );
};

export default Admin;
