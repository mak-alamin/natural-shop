import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="d-sm-flex justify-content-center justify-content-sm-between">
        <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">
          Copyright © 2022{" "}
          <a href="##" target="_blank">
            Natural Shop
          </a>
          . All rights reserved.
        </span>
        <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">
          Made with <i className="mdi mdi-heart text-danger"></i> by Mak Alamin
        </span>
      </div>
    </footer>
  );
};

export default Footer;
