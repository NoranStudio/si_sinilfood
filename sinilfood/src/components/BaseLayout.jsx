import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const BaseLayout = () => (
  <div className="base-layout">
    <Outlet />
    <Footer />
  </div>
);

export default BaseLayout;
