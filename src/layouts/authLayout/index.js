import { Footer } from "globalComponents";
import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default AuthLayout;
