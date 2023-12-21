import "./Testimonial.css";
import React from "react";

const Testimonial = ({
  reviewerImg,
  reviewerName,
  reviewContent,
  isMiddle,
}) => {
  return (
    <div
      className={
        isMiddle ? "testimonial-container isMiddle" : "testimonial-container"
      }
    >
      <span>“</span>
      <img src={reviewerImg} alt={reviewerName} className="img" />
      <p className="name">{reviewerName}</p>
      <p className="review">{reviewContent}</p>
    </div>
  );
};

export default Testimonial;
