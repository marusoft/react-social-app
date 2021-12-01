import { Users } from "../../DummyData";
import Online from "../online/Online";
import "./rightbar.css";

const Rightbar = ({ profile }) => {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthday-container">
          <img src="/assests/gift.png" alt="" className="birthday-img" />
          <span className="birthday-text">
            <b>Diego Foscal</b> and <b>3 of his friends</b> have a birthday.
          </span>
        </div>
        <img src="/assests/post/post-1.jpeg" alt="" className="rightbar-Ad" />
        <h4 className="rightbar-title">Online Friends</h4>
        <ul className="rightbar-friend-list">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="right-title">User information</h4>
        <div className="rightbar-info">
          <div className="rightbar-info-item">
            <span className="rightbar-info-key">City:</span>
            <span className="rightbar-info-value">Lagos</span>
          </div>
          <div className="rightbar-info-item">
            <span className="rightbar-info-key">From:</span>
            <span className="rightbar-info-value">Ogun</span>
          </div>
          <div className="rightbar-info-item">
            <span className="rightbar-info-key">Relationship:</span>
            <span className="rightbar-info-value">Married</span>
          </div>
        </div>
        <h4 className="right-title">User Friends</h4>
        <div className="rightbar-followings">
          <div className="rightbar-following">
            <img
              src="/assests/person/person-1.jpeg"
              alt=""
              className="rightbar-following-img"
            />
            <span className="rightbar-following-name">Sisoko Mboma</span>
          </div>
          <div className="rightbar-following">
            <img
              src="/assests/person/person-2.jpeg"
              alt=""
              className="rightbar-following-img"
            />
            <span className="rightbar-following-name">Sisoko Mboma</span>
          </div>
          <div className="rightbar-following">
            <img
              src="/assests/person/person-3.jpeg"
              alt=""
              className="rightbar-following-img"
            />
            <span className="rightbar-following-name">Sisoko Mboma</span>
          </div>
          <div className="rightbar-following">
            <img
              src="/assests/person/person-4.jpeg"
              alt=""
              className="rightbar-following-img"
            />
            <span className="rightbar-following-name">Sisoko Mboma</span>
          </div>
          <div className="rightbar-following">
            <img
              src="/assests/person/person-5.jpeg"
              alt=""
              className="rightbar-following-img"
            />
            <span className="rightbar-following-name">Sisoko Mboma</span>
          </div>
          <div className="rightbar-following">
            <img
              src="/assests/person/person-5.jpeg"
              alt=""
              className="rightbar-following-img"
            />
            <span className="rightbar-following-name">Sisoko Mboma</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbar-wrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
};

export default Rightbar;
