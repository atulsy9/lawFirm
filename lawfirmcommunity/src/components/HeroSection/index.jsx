import "./heroSection.css";
import Navbar from "../Navbar";
import EmailIcon from "@mui/icons-material/Email";
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <div className="mainSection">
      <div className="heroSection">
        <Navbar button={true} />
        <div className="pic-sec">
          <div className="NavSection">
            <div className="header">
              <div style={{ fontWeight: "400" }}>You don’t have to</div>
              <div style={{ fontWeight: "700" }}>Fight them Alone.</div>
            </div>
            <div className="headerDescription">
              Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
              curabitur sodales conubia ut inceptos faucibus himenaeos tortor
              eget, hac massa gravida arcu interdum proin curae.
            </div>
            <form className="formInput">
              <EmailIcon
                sx={{
                  width: "22px",
                  height: "22px",
                  position: "absolute",
                  left: "28px",
                  opacity: "30%",
                }}
              />
              <input placeholder="Enter your email address" type="text"></input>
              <button> Let’s Talk</button>
            </form>
          </div>
          <div className="outdiv-img">
            <img src="/heroSectionPic.png" alt="heroSectionPic" />
          </div>
        </div>
      </div>
    </div>
  );
};
