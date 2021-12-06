import "./TimeCard.scss";
import ThreeDots from "../../images/icon-ellipsis.svg";

export const TimeCard = ({ info, period }) => {
  const { title, timeframes } = info;

  return (
    <div className="card">
      <div className="card__title">
        <div>{title}</div>
        <div>
          <img src={ThreeDots} alt="Three dots" />
        </div>
      </div>

      <div className="card__current">
        <h1>{timeframes.daily.current}hrs</h1>
      </div>

      <div className="card__previous">
        Last {period} - {timeframes.daily.previous}hrs
      </div>
    </div>
  );
};
