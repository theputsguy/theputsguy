import React from "react";
import "./app.css";

const Legal = () => {
  return (
    <div className="legal-container">
      <span>
        <h1>Legal</h1>
        <h3>
          Options involve substantial risk and are not suitable for all investors. Be sure to read
          the OCC’s Characteristics and Risks of Standardized Options to learn more about options
          trading which can be found at{" "}
          <a href="http://www.optionsclearing.com/about/publications/character-risks.jsp">
            http://www.optionsclearing.com/about/publications/character-risks.jsp
          </a>{" "}
          The link is provided as a courtesy only. We encourage you to utilize the information at
          the SEC (<a href="http://www.sec.gov">http://www.sec.gov</a>) and the Financial Industry
          Regulatory Authority (FINRA) at (<a href="http://www.FINRA.org">http://www.FINRA.org</a>
          ). Public filings are available at SEC’s EDGAR page. FINRA has published information on
          how to invest carefully at its website. Theputsguy.com is intended for information and
          educational purposes only. We do not in any way warrant or guarantee the success of any
          action which you take in reliance on our statements.
          <br />
          <br />
          Copyright © 2021 Theputsguy - All Rights Reserved.
        </h3>
      </span>
    </div>
  );
};

export default Legal;
