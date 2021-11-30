import "./closefriend.css";

const CloseFriend = ({ user }) => {
  return (
    <li className="sidebar-friend">
      <img
        src={user.profileImg}
        alt=""
        className="sidebar-friend-img"
      />
      <span className="sidebar-friend-name">{user.username}</span>
    </li>
  );
};

export default CloseFriend;
