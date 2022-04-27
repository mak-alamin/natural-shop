import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "../../NotFound/NotFound";
import AddNewUser from "../AddNewUser/AddNewUser";
import AllUsers from "../AllUsers/AllUsers";
import Dashboard from "../Dashboard/Dashboard";
import Products from "../Products/Products";

const MainPanel = () => {
  return (
    <>
      <Routes>
        <Route
          path="/natural-shop-admin"
          element={<Dashboard></Dashboard>}
        ></Route>
        <Route
          path="/natural-shop-admin/products"
          element={<Products></Products>}
        ></Route>

        <Route
          path="/natural-shop-admin/users"
          element={<AllUsers></AllUsers>}
        ></Route>

        <Route
          path="/natural-shop-admin/add-new-user"
          element={<AddNewUser></AddNewUser>}
        ></Route>

        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </>
  );
};

export default MainPanel;
