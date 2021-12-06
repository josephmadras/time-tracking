import { data } from "../../data";
import { TimeCard } from "../TimeCard/TimeCard";
import "./TimeCardList.scss";


export const TimeCardList = () => {
  return (
    <div className="card-list">
      {data.map((info, i) => {
        return <TimeCard key={i} info={info} period="Day"/>;
      })}
    </div>
  );
};
