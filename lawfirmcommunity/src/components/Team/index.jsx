import Teamcard from "../Teamcard";
import "./team.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const teamData = [
    { name: "Danial Def", cases: "301 Cases", img: "./team/member1.png" },
    { name: "Sanfole", cases: "850 Cases", img: "./team/member2.png" },
    { name: "Cesforila", cases: "470 Cases", img: "./team/member3.png" },
    { name: "Colleen", cases: "180 Cases", img: "./team/member4.png" },
    { name: "Haldone", cases: "212 Cases", img: "./team/member5.png" },
    { name: "Nik Jeo", cases: "350 Cases", img: "./team/member6.png" },
  ];
  return (
    <div style={{ marginTop: "186px" }}>
      <div style={{ fontWeight: "600", fontSize: "54px", textAlign: "center" }}>
        Our Team
      </div>
      <div className="teamMemberOuterDiv">
        {teamData.map((member) => {
          return <Teamcard key={member.name} details={member} />;
        })}
      </div>
    </div>
  );
};
