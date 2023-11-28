import "./areaOfpratices.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <div style={{ marginTop: "171px" }} className="areaOfpratices_maindiv">
      <div style={{ fontWeight: 600, fontSize: "54px" }}>Area of Practices</div>
      <div className="img-grid">
        <div className="item1 config">
          <img src="./img1.png" alt="img1" />
          <div className="innerHeading">BUSINESS LAW</div>
        </div>
        <div className="item2 config">
          <img src="./img2.png" alt="img2" />
          <div className="innerHeading">Partnership LAW</div>
        </div>
        <div className="item3 config">
          <img src="./img3.png" alt="img3" />
          <div className="innerHeading">REAL ESTATE LAW</div>
        </div>
        <div className="item4 config">
          <img src="./img4.png" alt="img4" />
          <div className="innerHeading">BUSINESS LAW</div>
        </div>
        <div className="item5 config">
          <img src="./img5.png" alt="img5" />
          <div className="innerHeading">LANDLORD DISPUTES</div>
        </div>
        <div className="item6 config">
          <img src="./img6.png" alt="img6" />
          <div className="innerHeading">ELDER ABUSE</div>
        </div>
      </div>
    </div>
  );
};
