import React from "react";

import "./Tooltip.css";

const Tooltip = ({ tooltipText, children }) => {
  return (
    <div className="tooltip-trigger">
      {children}
      <div className="tooltip tooltip-top ">{tooltipText}</div>
    </div>
  );
};

export default Tooltip;
