import Navbar from "../Navbar";
import "./footer.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <div className="footerDiv">
      <div style={{ marginTop: "118px", width: "70vw" }}>
        <Navbar />
      </div>
      <div className="bottomSection">
        <div>© 2020 Acme. All rig</div>
        <div>Privacy Policy</div>
        <div>Terms of Service</div>
      </div>
    </div>
  );
};
