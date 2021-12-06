import jeremy from "../../images/image-jeremy.png"
import "./User.scss";

export const User = () => {
  return (
    <div className="user">
      <div className="user__profile">
        <div>
          <img src={jeremy} alt="Jeremy"/>
        </div>
        <div>
          <span>Report to</span>
          <h1>Jeremy Robson</h1>
        </div>
      </div>
      <div className="user__time-frame">
        <ul>
          <li>Daily</li>
          <li>Weekly</li>
          <li>Monthly</li>
        </ul>
      </div>
    </div>
  )
}

// export default User
