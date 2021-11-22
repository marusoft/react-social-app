import { Search, Person, Chat, Notifications } from "@mui/icons-material";
import "./topbar.css";

const Topbar = () => {
  return (
    <div className="topbar-container">
      <div className="topbar-left">
        <span className="logo">MarusoftSocial</span>
      </div>
      <div className="topbar-center">
      <div className="search-bar">
      <Search className="search-icon" />
        <input
          placeholder="Search for post, family and friends"
          className="search-input"
        />
      </div>
      </div>
      <div className="topbar-right">
        <div className="topbar-links">
          <span className="topbar-link">Homepage</span>
          <span className="topbar-link">Timeline</span>
        </div>
        <div className="topbar-icons">
          <div className="topbar-icon-item">
            <Person />
            <span className="topbar-icon-badge">2</span>
          </div>
          <div className="topbar-icon-item">
            <Chat />
            <span className="topbar-icon-badge">3</span>
          </div>
          <div className="topbar-icon-item">
            <Notifications />
            <span className="topbar-icon-badge">4</span>
          </div>
        </div>
        <img src="/assests/person/alimi1.jpeg" alt="" className="topbar-img" />
      </div>
    </div>
  );
};

export default Topbar;
