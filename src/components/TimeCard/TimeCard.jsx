import "./TimeCard.scss";
import threeDots from "../../images/icon-ellipsis.svg";
import exercise from "../../images/icon-exercise.svg";
import play from "../../images/icon-play.svg";
import selfCare from "../../images/icon-self-care.svg";
import social from "../../images/icon-social.svg";
import study from "../../images/icon-study.svg";
import work from "../../images/icon-work.svg";
import jeremy from "../../images/image-jeremy.png";

export const TimeCard = ({ info, period }) => {
  const { title, timeframes } = info;


  const illustration = (title) => {
    switch (title) {
      case "Work": return {icon: work, color: "hsl(15, 100%, 70%)"};
      case "Play": return {icon: play, color: "hsl(195, 74%, 62%)"};
      case "Study": return {icon:study, color: "hsl(348, 100%, 68%)"};
      case "Exercise": return {icon: exercise, color: "hsl(145, 58%, 55%)"};
      case "Social": return {icon: social, color: "hsl(264, 64%, 52%)"};
      case "Self Care": return {icon: selfCare, color: "hsl(43, 84%, 65%)"};
  }
  }
  return (
    <div className="card" style={{
      backgroundColor: illustration(title).color, 
      backgroundImage: `url(${illustration(title).icon})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "top -6% right 10%"
      
      
      }}>
      <div className="card__illustration" >
        {/* <img src={illustration(title)} alt="card illustration"/> */}
      </div>
      <div className="card__content">
        <div className="card__title">
        <div>{title}</div>
        <div>
          <img src={threeDots} alt="Three dots" />
        </div>
      </div>
       <div className="card__current">
        <h1>{timeframes.weekly.current}hrs</h1>
      </div>
     
     
       <div className="card__previous">
        Last {period} - {timeframes.weekly.previous}hrs
      </div>
     
     
     
     </div>
  

     

    
    </div>
  );
};
