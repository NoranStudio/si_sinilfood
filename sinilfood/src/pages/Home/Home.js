import React from "react";
import "../../assets/styles/global.css";

import Section1 from "./home_banner.jsx";
import Section2 from "./fc_oil.jsx";
import Section3 from "./Section3.jsx";

function Home() {
  return (
    <div 
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        maxWidth: 1920,
      }}
    >
      <Section1 />
      <Section2 />
      <Section3 />

    </div>
  );
}

export default Home;
