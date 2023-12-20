import "./Service.css";
export default function Service({ serviceImg, serviceTitle, serviceContent }) {
  return (
    <div className="service-conatiner">
      <img src={serviceImg} alt="Service Pic" />
      <h3>{serviceTitle}</h3>
      <p>{serviceContent}</p>
    </div>
  );
}
