import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dash = () => {
  return (
    <div class="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content ">
        <h2>Dash Board</h2>
        <Outlet></Outlet>
      </div>
      <div class=" drawer drawer-mobile">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/dashboard/review">Review</Link>
          </li>
          <li>
            <Link to="/dashboard/history">History</Link>
          </li>
        </ul>
      </div>

      {/* new */}
    </div>
  );
};

export default Dash;
