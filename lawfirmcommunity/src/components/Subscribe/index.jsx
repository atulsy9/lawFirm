import "./subscribe.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <div className="subscribeMainDiv">
      <div className="subscribeHeader"> Subscribe Our Newsletter</div>
      <form className="submitFrom">
        <input placeholder="Name : "></input>
        <input placeholder="Enter Your Email"></input>
        <button>SEND</button>
      </form>
    </div>
  );
};
