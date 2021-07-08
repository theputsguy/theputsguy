import React from "react";
import "./app.css";
import { Parallax } from "react-scroll-parallax";

const HeaderImage = () => {
  const ctaHandler = (elem) => {
    document.querySelectorAll(".cta-headers-bttn").forEach((x) => {
      x.classList.remove("cta-headers-bttn-toggled");
    });
    elem.currentTarget.classList.toggle("cta-headers-bttn-toggled");

    if (elem.currentTarget.innerText === "The Basics") {
      document.querySelector(".cta-body-container").innerHTML =
        "Selling a cash-covered put is actually a BULLISH strategy! Watch the basics of this under-appreciated INCOME strategy, used by the GOAT himself, Warren Buffett!";
    }
    if (elem.currentTarget.innerText === "What's the Catch?") {
      document.querySelector(".cta-body-container").innerHTML =
        "The optimal trade has a capped upside, unlike buying a speculative call option, we know our maximum profit the moment we have our order filled.  Of course, if we are assigned our put, we then have unlimited upside potential.";
    }
    if (elem.currentTarget.innerText === "Why Us?") {
      document.querySelector(".cta-body-container").innerHTML =
        "Theputsguy is devoted to his craft, and has experience trading options for 20+ years. He honed his craft through the dot.com bubble, the financial meltdown of 2008 and the 2020 Q1 pandemic crisis. Now with more people buying calls/puts than ever, it has never been a better time to start SELLING options!";
    }
  };

  return (
    <div className="header-image-container">
      <img
        className="header-image"
        alt="header"
        src="https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      />
      <Parallax y={[-50, 50]}>
        <div className="cta-container">
          <div className="cta-headers-container">
            <div onClick={ctaHandler} className="cta-headers-bttn cta-headers-bttn-toggled">
              The Basics
            </div>
            <div onClick={ctaHandler} className="cta-headers-bttn">
              What's the Catch?
            </div>
            <div onClick={ctaHandler} className="cta-headers-bttn">
              Why Us?
            </div>
          </div>
          <div className="cta-body-container">
            Selling a cash-covered put is actually a BULLISH strategy! Watch the basics of this
            under-appreciated INCOME strategy, used by the GOAT himself, Warren Buffett!
          </div>
          <div className="cta-footer">
            EARLY ACCESS ONLY! <br />
            –FULL ROLLOUT EXPECTED BY APRIL 2021–
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default HeaderImage;
