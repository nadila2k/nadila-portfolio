import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import NavSideBar from "./NavSideBar";

export default function AdminDashboardLayout() {
  return (
    <div className=" bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <div className="py-21 flex ">
        <SideBar>
          <NavSideBar name="Dashboard" />
          <NavSideBar name="Users" />
          <NavSideBar name="Products" />
        </SideBar>
        <div className="flex-1 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
