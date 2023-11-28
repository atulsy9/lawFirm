import SuccessCard from "../SuccessCard";
import "./whychooseus.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <div className="main-Section">
      <div className="choose-Header">Why Choose us?</div>
      <div className="successCard-outer">
        <SuccessCard successRate="98%" color="#1D1D1D" />
        <SuccessCard successRate="100%" color="#2E2E2E" />
        <SuccessCard successRate="100%" color="#1D1D1D" />
      </div>
    </div>
  );
};
