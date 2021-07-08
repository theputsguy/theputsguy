import React from "react";
import "./app.css";

const PricingTier = ({ title, body }) => {
  return (
    <div className="pricing-tier-container">
      <h1>{title}</h1>
      <h3>{body}</h3>
    </div>
  );
};

export default PricingTier;
