import "./about.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <div className="mainDiv">
      <div className="info-header">Let’s Introduce Ourself</div>
      <div style={{ fontWeight: "600", paddingLeft: "100px" }}>
        <div style={{ fontSize: "32px", width: "100%", marginBottom: "20px" }}>
          Criminal Lawyer
        </div>
        <div style={{ opacity: "30%" }}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequatduis enim velit mollit Exercitation.
        </div>
      </div>
    </div>
  );
};
