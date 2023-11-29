import SuccessCard from "../SuccessCard";
import "./whychooseus.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <div className="main-Section">
      <div className="choose-Header">Why Choose us?</div>
      <div className="successCard-outer">
        <SuccessCard successRate="98%" />
        <SuccessCard successRate="100%" />
        <SuccessCard successRate="100%" />
      </div>
    </div>
  );
};
