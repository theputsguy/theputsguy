import React, { useEffect } from "react";
import "./app.css";

import HeaderImage from "../headerImage/HeaderImage";
import Legal from "../legal/Legal";
import Pricing from "../pricing/Pricing";

const AboutUs = ({ setSelectedLink }) => {
  useEffect(() => {
    window.scroll(0, 0);
    setSelectedLink(0);
  });
  return (
    <div>
      <HeaderImage />
      <Pricing />
      <Legal />
    </div>
  );
};

export default AboutUs;
