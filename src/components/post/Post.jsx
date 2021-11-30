import { MoreVert } from "@mui/icons-material";
import { useState } from "react";
import { Users } from "../../DummyData";
import "./post.css";

const Post = ({ post }) => {
  // console.log(`post`, post)

  // const user = Users.filter(u => u.id === 1);
  // console.log(user[0].username);

  const [like, setlike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setlike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="post">
      <div className="post-wrapper">
        <div className="post-top">
          <div className="post-top-left">
            <img
              src={Users.filter((u) => u.id === post.userId)[0].profileImg}
              alt=""
              className="post-img"
            />
            <span className="post-username">
              {Users.filter((u) => u.id === post.userId)[0].username}
            </span>
            <span className="post-date">{post.date}</span>
          </div>
          <div className="post-top-right">
            <MoreVert />
          </div>
        </div>
        <div className="post-center">
          <span className="post-text">{post?.desc}</span>
          <img className="post-center-img" src={post.photo} alt="" />
        </div>
        <div className="post-bottom">
          <div className="bottom-left">
            <img
              src="/assests/social/like.png"
              onClick={handleLike}
              alt=""
              className="like-icon"
            />
            <img
              src="/assests/social/love.png"
              onClick={handleLike}
              alt=""
              className="like-icon"
            />
            <span className="post-like-counter">{like} peoples like it</span>
          </div>
          <div className="bottom-right">
            <span className="post-comment-text">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
