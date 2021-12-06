import "./TimeCard.scss";
import ThreeDots from "../../images/icon-ellipsis.svg";

export const TimeCard = ({ tracker }) => {
  const { category, currentHours, previousHours, period } = tracker;

  return (
    <div>
      <div>
        <div>{category}</div>
        <div>
          <img src={ThreeDots} alt="Three dots" />
        </div>
      </div>

      <div>
        <h1>{currentHours}hrs</h1>
      </div>

      <div>
        Last {period} - {previousHours}hrs
      </div>
    </div>
  );
};
