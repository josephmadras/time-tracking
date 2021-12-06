import { data } from "../../data";
import { TimeCard } from "../TimeCard/TimeCard";
import { User } from "../User/User";
import "./TimeCardList.scss";


export const TimeCardList = () => {
  return (
    <div style={{display: "flex"}}>
      <User/>
      <div className="card-list">
        {data.map((info, i) => {
          return <TimeCard key={i} info={info} period="Day"/>;
        })}
      </div>
    </div>
  );
};
