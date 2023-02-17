import React from "react";
import Header from "../components/Header";
import { Outlet, useLocation } from "react-router";

const RouteLayout = () => {
  const { pathname } = useLocation();
  return (
    <div className="flex flex-col">
      {!(pathname === "/") && <Header />}
      <Outlet />
    </div>
  );
};

export default RouteLayout;
