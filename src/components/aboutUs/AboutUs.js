import React, { useEffect } from "react";
import "./app.css";

import HeaderImage from "../headerImage/HeaderImage";
import Legal from "../legal/Legal";
import Pricing from "../pricing/Pricing";
import Contact from "../contact/Contact";

const AboutUs = ({ setSelectedLink }) => {
  useEffect(() => {
    window.scroll(0, 0);
    setSelectedLink(0);
  });
  return (
    <div>
      <Contact key="contact" />
      <HeaderImage />
      <Pricing />
      <Legal />
    </div>
  );
};

export default AboutUs;
