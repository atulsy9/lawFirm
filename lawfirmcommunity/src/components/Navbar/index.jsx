import "./navbar.css";
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <div className="navBarSection">
      <img src="/lawfirmlogo.png" alt="lawfirmlogo" />
      <div className="optionSection">
        <div>Home</div>
        <div>Attorneys</div>
        <div>Pratice Areas</div>
        <div>About Us</div>
      </div>

      <button className="navbar-btn">Contact Now</button>
    </div>
  );
};
