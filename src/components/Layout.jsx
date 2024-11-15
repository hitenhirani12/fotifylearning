import React from "react";
import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="layout-container">
      {/* Dynamic content render hoga jo route ke hisaab se change hoga */}
      <Outlet />
    </div>
  );
}

export default Layout;