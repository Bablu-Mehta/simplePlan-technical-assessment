import Service from "./service/service";
import ArtBoard1 from "../../assets/services-svg/ArtBoard-27.svg";
import ArtBoard2 from "../../assets/services-svg/ArtBoard-21.svg";
import Studying from "../../assets/services-svg/6092 - Studying on System II.svg";
import Payment from "../../assets/services-svg/payment.png";
import "./Services.css";

export default function Services() {
  return (
    <div className="services-container">
      <div className="services-header">
        <p>
          Explore. Enroll. Have Fun. Repeat - <br /> here hobby meets happiness
        </p>
      </div>
      <div className="services">
        <Service
          serviceImg={ArtBoard1}
          serviceTitle="Learn something new"
          serviceContent="Explore your passion and go beyond the physical and mental boundaries of time, age, gender or geography."
        />
        <Service
          serviceImg={ArtBoard2}
          serviceTitle="Skilled & Passionate Teachers"
          serviceContent="We offers Interactive classes by experts who are qualified and trusted."
        />
        <Service
          serviceImg={Studying}
          serviceTitle="Take classes anytime, anywhere"
          serviceContent="Join sessions at your own convenience and pace, from the comforts of your home."
        />
        <Service
          serviceImg={Payment}
          serviceTitle="Pay as you go"
          serviceContent="No enrollment fee for our classes. You only pay for the classes that you take. Your payment is Safe and secure with us."
        />
      </div>
    </div>
  );
}
