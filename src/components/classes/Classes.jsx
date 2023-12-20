import React from "react";
import Class from "./class/class";
import "./Classes.css";
import ClassImg from "../../assets/classImg/classImg.png";
import SaveSVG from "../../assets/classImg/save-svg.svg";
import SavedSVG from "../../assets/classImg/saved-svg.svg";
import Star from "../../assets/classImg/Frame.svg";

const Classes = () => {
  return (
    <div className="classes-container">
      <div className="classes-heading">
        <div className="left">
          <p>Discover classes</p>
          <small>SHOW ALL</small>
        </div>
        <div className="right">
          <small>Show prices in:</small>
          <div className="classes-price-toggle">
            <button className="nok">NOK</button>
            <button className="inr">INR</button>
          </div>
        </div>
      </div>
      <p className="classes-sub-heading">
        Choose from a variety of classes from around the world.
      </p>

      <div className="classes-section">
        {/* ====================== 1 ========================= */}

        <Class
          classImg={ClassImg}
          offer="60% OFF"
          bookmarkImg={SaveSVG}
          classTitle="Language"
          classDesc="Class name - Lorem ipsum sit elit varsit lectusi sit amet"
          author="by John Doe"
          star={Star}
          rating="4.7"
          classContent="Lorem ipsum dolor sit amet, varius consectetur varius entat consectet adipiscing elit. Ullamcorper..."
          price="kr1000"
          fixedPrice="kr2000"
        />

        {/* ========================== 2 ================================= */}
        <Class
          classImg={ClassImg}
          offer="60% OFF"
          bookmarkImg={SavedSVG}
          classTitle="Language"
          classDesc="Class name - Lorem ipsum sit elit varsit lectusi sit amet"
          author="by John Doe"
          star={Star}
          rating="4.7"
          classContent="Lorem ipsum dolor sit amet, varius consectetur varius entat consectet adipiscing elit. Ullamcorper..."
          price="kr1000"
          fixedPrice="kr2000"
        />

        {/* =============================== 3 ====================================== */}
        <Class
          classImg={ClassImg}
          bookmarkImg={SaveSVG}
          classTitle="Language"
          classDesc="Class name - Lorem ipsum sit elit varsit lectusi sit amet"
          author="by John Doe"
          star={Star}
          rating="4.7"
          classContent="Lorem ipsum dolor sit amet, varius consectetur varius entat consectet adipiscing elit. Ullamcorper..."
          price="kr1,499"
        />
        {/* ============================ 4 ==================================== */}
        <Class
          classImg={ClassImg}
          offer="60% OFF"
          bookmarkImg={SaveSVG}
          classTitle="Language"
          classDesc="Class name - Lorem ipsum sit elit varsit lectusi sit amet"
          author="by John Doe"
          star={Star}
          rating="4.7"
          classContent="Lorem ipsum dolor sit amet, varius consectetur varius entat consectet adipiscing elit. Ullamcorper..."
          price="kr1,499"
          fixedPrice="kr1,499"
        />
      </div>
    </div>
  );
};

export default Classes;
