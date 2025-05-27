import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";

const Layout = () => {
  return (
    <div className="layout">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
