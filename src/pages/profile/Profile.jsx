import "./profile.css";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Topbar from "../../components/topbar/Topbar";

const Profile = () => {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profile-right">
          <div className="profile-right-top">
            <div className="profile-cover">
              <img className="profile-cover-img" src="/assests/post/post-3.jpeg" alt="" />
              <img className="profile-user-img" src="/assests/person/alimi1.jpeg" alt="" />
            </div>
            <div className="profile-info">
              <h4 className="profile-info-name">Marusoft</h4>
              <span className="profile-info-description">Hello my friends and family</span>
            </div>
          </div>
          <div className="profile-right-bottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
