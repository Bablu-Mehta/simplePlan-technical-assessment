import "./Testimonials.css";
import React from "react";
import Testimonial from "./testimonial/Testimonial";
import reviewer1 from "../../assets/testimonialImg/Ellipse1.svg";
import reviewer2 from "../../assets/testimonialImg/Ellipse2.svg";
import reviewer3 from "../../assets/testimonialImg/Ellipse3.svg";

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <div className="testimonial-heading">Love from community</div>
      <section className="testimonial-section">
        <Testimonial
          reviewerImg={reviewer1}
          reviewerName="Karandeep"
          reviewContent="It is nice to be on an international platform where there are teachers from around the world."
          isMiddle={false}
        />

        <Testimonial
          reviewerImg={reviewer2}
          reviewerName="Kalpana"
          reviewContent="The best thing about these classes is that they are live and interactive. They have classes which help us to learn specialties and famous activities from other countries as well."
          isMiddle={true}
        />

        <Testimonial
          reviewerImg={reviewer3}
          reviewerName="Kirti"
          reviewContent="As a student, I get to explore and learn about the different cultural specialties of another country with native teachers."
          isMiddle={false}
        />
      </section>
    </div>
  );
};

export default Testimonials;
