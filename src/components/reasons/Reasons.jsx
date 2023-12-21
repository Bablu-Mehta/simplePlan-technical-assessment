import React from "react";
import "./Reasons.css";
import Reason from "./reason/Reason";
import onlineClass from "../../assets/reasons-svg/online-class.svg";
import ageNoBar from "../../assets/reasons-svg/Age-no-bar.svg";
import countrySharing from "../../assets/reasons-svg/country-sharing.svg";
import passionateTeachers from "../../assets/reasons-svg/passionate-teachers.svg";
import payment from "../../assets/reasons-svg/payment.png";
import revival from "../../assets/reasons-svg/revival.svg";

const Reasons = () => {
  return (
    <>
      <div className="reasons-heading">Six reasons to choose our class</div>
      <div className="reasons-container">
        <Reason
          reasonImg={onlineClass}
          reasonContent="Interactive live online classes at your convenient time slots"
        />
        {/* ================================================= */}
        <Reason
          reasonImg={passionateTeachers}
          reasonContent="Learning from passionate, talented and trusted teachers"
        />
        {/* =================================================== */}
        <Reason
          reasonImg={countrySharing}
          reasonContent="Cross country sharing of interesting and unique hobbies from across the world"
        />
        {/* ======================================================== */}
        <Reason
          reasonImg={ageNoBar}
          reasonContent="Age no bar for enroling into your cherished hobby or activity classes"
        />
        {/* ===================================================== */}
        <Reason
          reasonImg={payment}
          reasonContent="Transparent and structured fee payment options"
        />
        {/* ======================================================= */}
        <Reason
          reasonImg={revival}
          reasonContent="Contributing to the revival and nurturing of traditional art forms"
        />
        {/* ======================================================== */}
      </div>
    </>
  );
};

export default Reasons;
