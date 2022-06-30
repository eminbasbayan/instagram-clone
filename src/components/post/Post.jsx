import { Avatar } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./post.css";

export const Post = ({ top, bottom }) => {
  return (
    <div className="post-wrapper">
      {top && (
        <div className="post-header">
          <div className="post-header-left">
            <a href="/">
              <Avatar
                src={"/images/person/0.png"}
                sx={{ width: 32, height: 32 }}
              />
            </a>
            <a href="/" className="profile-username">
              eminbasbayan
            </a>
          </div>
          <div className="post-header-right">
            <button>
              <MoreHorizIcon />
            </button>
          </div>
        </div>
      )}
      <div className="post-image">
        <img src={"/images/post/1.png"} alt="Post Img" />
      </div>
      {bottom && (
        <div className="post-bottom">
          <div className="post-like">
            <button onClick="">
              <FavoriteIcon className={`post-like-icon ${"active"}`} />
            </button>
          </div>
          <span className="post-like-count">1 like</span>
          <div className="post-content">
            <a href="/" className="profile-username">
              eminbasbayan
            </a>{" "}
            <span className="post-text">Post açıklaması.</span>
          </div>
          <div className="post-time">1 dakika önce</div>
        </div>
      )}
    </div>
  );
};
