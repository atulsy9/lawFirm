import "./happyCustomerCard.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ name, color, imgsrc }) => {
  return (
    <div className="customerCard-outerDiv" style={{ backgroundColor: color }}>
      <img src={imgsrc} alt="customer" />
      <div style={{ fontWeight: "600", fontSize: "24px" }}>{name}</div>
      <div style={{ fontWeight: "400", fontSize: "14px" }}>Ceo of Hunt</div>
      <div style={{ fontWeight: "500", fontSize: "14px", opacity: "30%" }}>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua
        dolor do amet sint. Velit officia
      </div>
    </div>
  );
};
