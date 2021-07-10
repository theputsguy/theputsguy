import React from "react";
import "./app.css";

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const Paypal = () => {
  return (
    <div className="paypal-container">
      <div className="paypal">
        <PayPalScriptProvider
          key={Math.random() * 1000}
          options={{
            vault: true,
            intent: "subscription",
            "client-id":
              "AZ7vXecQWn8cWefPUUzZtkGw0mCBcy7LyiGUp3hQp3PF3NnjckBR933mB-NBVxSZ4U2OGvg9S-VNjk3a",
          }}
        >
          <PayPalButtons
            key={Math.random() * 1000}
            style={{
              shape: "rect",
              color: "blue",
              layout: "vertical",
              label: "subscribe",
            }}
            createSubscription={(data, actions) => {
              return actions.subscription.create({
                plan_id: "P-39416550052554117MCFSLRQ",
              });
            }}
            onApprove={(data, actions) => {
              // Capture the funds from the transaction
              return actions.subscription.get().then(function (details) {
                // Show a success message to your buyer
                alert("Subscription completed");
              });
            }}
          />
        </PayPalScriptProvider>
      </div>
    </div>
  );
};

export default Paypal;
