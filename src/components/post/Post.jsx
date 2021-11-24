import { MoreVert } from "@mui/icons-material";
import "./post.css";

const Post = () => {
  return (
    <div className="post">
      <div className="post-wrapper">
        <div className="post-top">
          <div className="post-top-left">
            <img
              src="/assests/person/alimi1.jpeg"
              alt=""
              className="post-img"
            />
            <span className="post-username">Abdullah</span>
            <span className="post-date">10 min ago</span>
          </div>
          <div className="post-top-right">
            <MoreVert />
          </div>
        </div>
        <div className="post-center">
          <span className="post-text">Hi, it's my first post:</span>
          <img className="post-center-img" src="/assests/post/post-2.jpeg" alt="" />
        </div>
        <div className="post-bottom">
          <div className="bottom-left">
            <img src="/assests/post/like.png" alt="" className="like-icon" />
            <img src="/assests/post/love.png" alt="" className="like-icon" />
            <span className="post-like-counter">32 people like it</span>
          </div>
          <div className="bottom-right">
            <span className="post-comment-text">9 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
