import Accordion from "../Accordion";
import "./faqSection.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <div className="faqMaindiv">
      <div style={{ fontWeight: 600, fontSize: "54px" }}>FAQ</div>
      <div className="faqInnerDiv">
        <div
          style={{
            width: "100%",
            fontWeight: "500",
            fontSize: "18px",
            opacity: "30%",
          }}
        >
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint.
        </div>
        <Accordion />
      </div>
    </div>
  );
};
