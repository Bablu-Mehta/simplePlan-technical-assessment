import React from "react";
import "./Categories.css";
import Category from "./category/Category";
import Language from "../../assets/categoriesImg/language.png";
import academics from "../../assets/categoriesImg/academics.png";
import art from "../../assets/categoriesImg/art.png";
import cooking from "../../assets/categoriesImg/cooking.png";
import fun from "../../assets/categoriesImg/fun.png";
import music from "../../assets/categoriesImg/music.png";
import roots from "../../assets/categoriesImg/roots.png";
import yoga from "../../assets/categoriesImg/yoga.png";
import SVG from "../../assets/categoriesImg/Vector.svg";

const Categories = () => {
  return (
    <div className="categories-container">
      <p className="categories-heading">Browse by category</p>
      <div className="category-section">
        <Category
          categoryImg={Language}
          categoryTitle="Language"
          categorySVG={SVG}
        />

        {/* ======================================== */}
        <Category
          categoryImg={cooking}
          categoryTitle="Cooking"
          categorySVG={SVG}
        />
        {/* ============================================= */}
        <Category categoryImg={music} categoryTitle="Music" categorySVG={SVG} />
        {/* =========================================== */}
        <Category
          categoryImg={art}
          categoryTitle="Art & Craft"
          categorySVG={SVG}
        />
        {/* ============================================= */}
        <Category categoryImg={yoga} categoryTitle="Yoga" categorySVG={SVG} />
        {/* ===================================== */}
        <Category
          categoryImg={academics}
          categoryTitle="Academics"
          categorySVG={SVG}
        />
        {/* =================================== */}
        <Category
          categoryImg={roots}
          categoryTitle="Back to Roots"
          categorySVG={SVG}
        />
        {/* ========================================== */}
        <Category
          categoryImg={fun}
          categoryTitle="Funteresting"
          categorySVG={SVG}
        />
      </div>
    </div>
  );
};

export default Categories;
