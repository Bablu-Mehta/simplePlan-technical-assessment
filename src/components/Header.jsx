import "./Header.css";
export default function Header() {
  return (
    <div className="header-conatiner">
      <div className="left">
        <h3>Logo</h3>
        <h4>Categories</h4>
      </div>
      <div className="right">
        <ul>
          <li>Teach</li>
          <span></span>
          <li className="btn">login</li>
          <li className="btn-primary">singup</li>
        </ul>
      </div>
    </div>
  );
}
