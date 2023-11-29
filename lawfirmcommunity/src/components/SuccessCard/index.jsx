import "./successCard.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ successRate }) => {
  return (
    <div className="cardMain-Section">
      <div className="img-outerDiv">
        <img src="./giftIcon.png" alt="giftIcon" />
      </div>
      <div style={{ fontWeight: "600", fontSize: "24px" }}>
        {successRate} Success Rate
      </div>
      <div style={{ fontWeight: "500", fontSize: "14px", Opacity: "30%" }}>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequatduis enim velit mollit Exer.
      </div>
      <button>Read More</button>
    </div>
  );
};
