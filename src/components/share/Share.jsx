import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material";
import "./share.css";

const Share = () => {
  return (
    <div className="share">
      <div className="share-wrapper">
        <div className="share-top">
          <img
            className="profile-image"
            src="/assests/person/alimi1.jpeg"
            alt=""
          />
          <input placeholder="what's in your mind" className="share-input" />
        </div>
        <hr className="share-hr" />
        <div className="share-bottom">
          <div className="share-options">
            <div className="share-option">
              <PermMedia htmlColor="tomato" className="share-icon" />
              <span className="share-option-text">Photo or Video</span>
            </div>
            <div className="share-option">
              <Label htmlColor="blue" className="share-icon" />
              <span className="share-option-text">Tag</span>
            </div>
            <div className="share-option">
              <Room htmlColor="green" className="share-icon" />
              <span className="share-option-text">Location</span>
            </div>
            <div className="share-option">
              <EmojiEmotions htmlColor="goldenrod" className="share-icon" />
              <span className="share-option-text">Feeling</span>
            </div>
          </div>
          <button className="share-button">Share</button>
        </div>
      </div>
    </div>
  );
};

export default Share;
