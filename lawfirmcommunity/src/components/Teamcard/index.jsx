import "./teamCard.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ details }) => {
  return (
    <div className="teamCardMainDiv">
      <img src={details.img} alt="member" />
      <div className="teamMemberdetails">
        <div className="nameDiv">{details.name}</div>
        <div className="casesCount">{details.cases}</div>
      </div>
    </div>
  );
};
