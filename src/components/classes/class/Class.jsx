import "./Class.css";
export default function Class({
  classImg,
  offer,
  bookmarkImg,
  classTitle,
  classDesc,
  author,
  rating,
  classContent,
  price,
  fixedPrice,
  star,
}) {
  return (
    <div className="class-card">
      <div className="class-img">
        <img src={classImg} alt="Class Image" className="img" />
        {offer && <p className="offer">{offer}</p>}
        <img
          src={bookmarkImg ? bookmarkImg : ""}
          alt="Bookmark"
          className="save"
        />
      </div>
      <div className="class-detail">
        <div className="class-title">{classTitle}</div>
        <div className="class-description"> {classDesc}</div>
        <div className="author">
          <p className="author-name">{author}</p>
          <img src={star} alt="star" className="star" />
          <p className="rating">{rating}</p>
        </div>
        <div className="class-content">{classContent}</div>
      </div>
      <div className="class-price-container">
        <div className="price-card">
          <p className="price">{price}</p>
          {fixedPrice && (
            <>
              <span></span>
              <small>{fixedPrice}</small>
            </>
          )}
        </div>
        <div className="enroll">Enroll Now</div>
      </div>
    </div>
  );
}
