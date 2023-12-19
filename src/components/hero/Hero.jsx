import "./Hero.css";
import { FaHeart } from "react-icons/fa6";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import SVG from "../../assets/Group.svg";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";

export default function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-left">
        <div className="hero-3h">
          <h2>Hobbies</h2>
          {/* <FaHeart className="heart-icon" /> */}
          <h2>Happiness</h2>
          {/* <FaHeart className="heart-icon" /> */}
          <h2>Home</h2>
        </div>
        <p className="hero-content">
          A Nordic startup which brings incredibly interesting hobbies from
          around the world to people of all ages.
        </p>
        <div className="input-btn">
          <input type="text" placeholder="Enter Your Email" />
          <p className="btn-primary">
            Start Exploring <FaRegArrowAltCircleRight className="arrow-icon" />
          </p>
        </div>
      </div>
      <div className="hero-right">
        <img
          src="https://via.placeholder.com/754x525"
        />
      </div>
      <img src={SVG} className="hero-vector-img" alt="Bendy Arrow" />
      <div className="chat">
        <HiOutlineChatBubbleLeftRight className="chat-icon" />
      </div>
    </div>
  );
}
