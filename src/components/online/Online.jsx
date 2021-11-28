import "./online.css";

const Online = ({user}) => {
  return (
    <li className="rightbar-friend">
      <div className="rightbar-img-container">
        <img
          src={user.profileImg}
          alt=""
          className="rightbar-profile-img"
        />
        <span className="rightbar-online"></span>
      </div>
      <span className="rightbar-username">{user.username}</span>
    </li>
  );
};

export default Online;
