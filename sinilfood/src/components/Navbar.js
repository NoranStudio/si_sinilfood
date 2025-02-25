import logo from "../assets/img/sinil_logo.png";
import { Link, useLocation } from "react-router-dom";

const navbarItems = [
  { name: "회사소개", path: "/about" },
  { name: "사업영역", path: "/business" },
  { name: "제품소개", path: "/products" },
  { name: "고객서비스", path: "/services" },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="navbar">
      <img className="navbar__logo" src={logo} alt="Sinilfood Logo" />
      <nav className="navbar__items">
        <ul>
          {navbarItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.path}
                className={
                  location.pathname.startsWith(item.path) ? "active" : ""
                }
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
