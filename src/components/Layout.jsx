import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="containerDiv">
        <Outlet />
        <div className="drops">
          <div className="drop drop-1"></div>
          <div className="drop drop-2"></div>
          <div className="drop drop-3"></div>
          <div className="drop drop-4"></div>
          <div className="drop drop-5"></div>
        </div>
      </div>
    </>
  );
};

export default Layout;
