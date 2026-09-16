import React, { useEffect } from "react";
import trustLogo from "../assets/logo/trustpilot_icon.png";

const TrustpilotWidget = () => {
  useEffect(() => {
    if (!window.Trustpilot) {
      const script = document.createElement("script");
      script.src =
        "https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js";
      script.async = true;
      document.body.appendChild(script);
    } else {
      window.Trustpilot.loadFromElement(
        document.getElementById("trustpilot-widget"),
        true
      );
    }
  }, []);

  return (
    <div className="flex flex-col items-center text-center pr-45">

      {/* 🔹 Clickable Top Section */}
      <a
        href="https://www.trustpilot.com/review/digifyamerica.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white hover:bg-gray-50 transition-all duration-300 rounded-xl shadow-md px-4 py-3 border border-gray-200 flex flex-col items-center"
      >
        <p className="text-black text-sm mb-1">Leave us a review</p>

        <img
          src={trustLogo}
          alt="Trustpilot Logo"
          className="w-24 object-contain"
        />
      </a>

      {/* 🔹 ACTUAL Trustpilot Widget */}
      <div
        id="trustpilot-widget"
        className="trustpilot-widget mt-3"
        data-locale="en-US"
        data-template-id="5419b6a8b0d04a076446a9ad"
        data-businessunit-id="5e84c52dcab47a0001d27d19"
        data-style-height="24px"
        data-style-width="100%"
        data-theme="light"
      >
        <a
          href="https://www.trustpilot.com/review/digifyamerica.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Trustpilot
        </a>
      </div>
    </div>
  );
};

export default TrustpilotWidget;