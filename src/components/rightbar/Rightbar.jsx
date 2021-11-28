import { Users } from "../../DummyData";
import Online from "../online/Online";
import "./rightbar.css";

const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="rightbar-wrapper">
        <div className="birthday-container">
          <img src="/assests/gift.png" alt="" className="birthday-img" />
          <span className="birthday-text">
           <b>Diego Foscal</b> and <b>3 of his friends</b> have a birthday.
          </span>
        </div>
        <img src="/assests/post/post-1.jpeg" alt="" className="rightbar-Ad" />
        <h4 className="rightbar-title">Online Friends</h4>
        <ul className="rightbar-friend-list">
         {Users.map(u =>(
           <Online key={u.id} user={u}/>
         ))}
        </ul>
      </div>
    </div>
  );
};

export default Rightbar;
