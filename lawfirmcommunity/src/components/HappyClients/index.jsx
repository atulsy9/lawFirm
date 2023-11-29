import Carousel from "../Carousel";
import HappyCustomerCard from "../HappyCustomerCard";
import "./happyClients.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <div style={{ marginTop: "186px", width: "1137px", height: "626px" }}>
      <div style={{ fontWeight: "600", fontSize: "54px", width: "45%" }}>
        What says our happy Clients
      </div>
      <Carousel />
    </div>
  );
};
