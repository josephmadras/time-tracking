import "./TimeCard.scss";
import ThreeDots from "../../images/icon-ellipsis.svg";

export const TimeCard = ({ info, period }) => {
  const { title,  timeframes} = info;

 return (
    <div cla>
      <div>
        <div>{title}</div>
        <div>
          <img src={ThreeDots} alt="Three dots" />
        </div>
      </div>

      <div>
        <h1>{timeframes.daily.current}hrs</h1>
      </div>

      <div>
        Last {period} - {timeframes.daily.previous}hrs
      </div>
    </div>
  );
};
