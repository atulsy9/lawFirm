import "./navbar.css";
// eslint-disable-next-line import/no-anonymous-default-export
export default ({ button }) => {
  return (
    <div className="navBarSection">
      <img src="/lawfirmlogo.png" alt="lawfirmlogo" />
      <div className="optionSection">
        <div>Home</div>
        <div>Attorneys</div>
        <div>Pratice Areas</div>
        <div>About Us</div>
      </div>
      {button ? (
        <button className="navbar-btn">Contact Now</button>
      ) : (
        <div className="connects">
          <img src="./socialmedia/insta.png" alt="insta" />
          <img src="./socialmedia/facebook.png" alt="insta" />
          <img src="./socialmedia/twitter.png" alt="twitter" />
          <img src="./socialmedia/pinest.png" alt="pinest" />
        </div>
      )}
    </div>
  );
};
