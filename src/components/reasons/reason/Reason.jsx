import React from "react";
import "./Reason.css";
const Reason = ({ reasonImg, reasonContent }) => {
  return (
    <div className="reason-container">
      <div className="img-card">
        <img src={reasonImg} alt="IMAGES" />
      </div>
      <div className="reason-content">{reasonContent}</div>
    </div>
  );
};

export default Reason;
