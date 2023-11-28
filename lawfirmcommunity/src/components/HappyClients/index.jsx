import HappyCustomerCard from "../HappyCustomerCard";
import "./happyClients.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <div style={{ marginTop: "186px", width: "1137px", height: "626px" }}>
      <div>
        <div style={{ fontWeight: "600", fontSize: "54px", width: "45%" }}>
          What says our happy Clients
        </div>
        <div></div>
      </div>
      <div className="happyCustomer-outerDiv">
        <HappyCustomerCard
          name="Jane Cooper"
          color="#1D1D1D"
          imgsrc="./happycustomer1.png"
        />
        <HappyCustomerCard
          name="Devon Lane"
          color="#2E2E2E"
          imgsrc="./happycustomer3.png"
        />
        <HappyCustomerCard
          name="Robert Fox"
          color="#1D1D1D"
          imgsrc="./happycustomer2.png"
        />
      </div>
    </div>
  );
};
