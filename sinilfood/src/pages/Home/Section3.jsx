import React from "react";
import partners from "../../assets/img/partners-header-bg.png"; // partners-header-bg.png
// partners-header-bg.png
const Section3 = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
        height: "2780px",
        display: "flex",
        flexDirection: "column",
        flex: 1,
        backgroundImage: `url(${partners})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% auto",
        backgroundPositionY:'800px',
        //background: "linear-gradient(to bottom rgba(255,255,255,0) 50%, rgba(255,255,255,1) 100%)",
      }}
    >
      <div style={{display:'flex' , height:1050 , backgroundColor:'#86a'}}></div>
      <div>Sdsfasdfsad</div>
    </div>
  );
};

export default Section3;
