import "./Certification.css";

import React from "react";
import certificateImg from "../../assets/certification/certification.png";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const Certification = () => {
  return (
    <div className="certification-container">
      <div className="left">
        <img src={certificateImg} alt="Teacher with the student" />
      </div>
      <div className="right">
        <h1>Become a certified teacher</h1>
        <p>
          We only have the best and trusted teachers from the globe. Join us if
          you have the skill and passion to share it.
        </p>
        <ul>
          <li>Make your own schedule</li>
          <li>Teach students on an international platform</li>
          <li>
            Become part of an international community of passionate educators
          </li>
        </ul>
        <p className="ct-btn-primary">
          Start Exploring <FaRegArrowAltCircleRight className="ct-arrow-icon" />
        </p>
      </div>
    </div>
  );
};

export default Certification;
