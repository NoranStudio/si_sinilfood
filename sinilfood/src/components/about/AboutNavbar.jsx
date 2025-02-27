import { useEffect, useRef, useState } from "react";
import { useLocation, Link } from "react-router-dom";

const aboutNavItems = [
  { name: "회사소개", path: "/about" },
  { name: "CI", path: "/about/ci" },
  { name: "인증 및 허가증", path: "/about/approvals" },
  { name: "찾아오시는 길", path: "/about/path" },
  { name: "연혁", path: "/about/history" },
  { name: "조직도", path: "/about/organization" },
];

const AboutNavbar = () => {
  const location = useLocation();
  const positions = useRef([]);
  const [highlight, setHighlight] = useState({
    left: 0,
    right: 0,
  });

  useEffect(() => {
    const activeIndex = aboutNavItems.findIndex(
      (item) => item.path === location.pathname
    );
    const activeElement = positions.current[activeIndex];
    if (activeElement) {
      setHighlight({
        left: activeElement.offsetLeft,
        right: activeElement.offsetLeft + activeElement.offsetWidth,
      });
    }
  }, [location.pathname]);

  return (
    <div className="about-nav">
      <div
        className="about-nav__highlight"
        style={{
          left: 0,
          width: highlight.left,
        }}
      />
      <div
        className="about-nav__highlight"
        style={{
          left: highlight.right,
          width: "calc(100% - " + highlight.right + "px)",
        }}
      />
      <ul>
        {aboutNavItems.map((item, index) => (
          <li ref={(r) => (positions.current[index] = r)} key={item.path}>
            <Link
              className={location.pathname === item.path ? "active" : ""}
              to={item.path}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutNavbar;
