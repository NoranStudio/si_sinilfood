import { Outlet } from "react-router-dom";
import AboutHeader from "./AboutHeader";
import AboutNavbar from "./AboutNavbar";
import "../../assets/styles/about.css";

const AboutLayout = () => {
  return (
    <div>
      <AboutHeader />
      <AboutNavbar />
      <Outlet />
    </div>
  );
};

export default AboutLayout;
