import React from "react";
import "./Category.css";
const Category = ({ categoryImg, categoryTitle, categorySVG }) => {
  return (
    <div className="category-container">
      <div className="category-card">
        <img src={categoryImg} alt={categoryTitle} className="category-img" />
        <p className="category-title">{categoryTitle}</p>
        <img src={categorySVG} alt="vector" className="svg" />
      </div>
    </div>
  );
};

export default Category;
