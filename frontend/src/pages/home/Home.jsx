import { useEffect, useState } from "react";
import { Post } from "../../components/post/Post";
import { RightBox } from "../../components/rightBox/RightBox";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import "./home.css";

export const Home = () => {
  const [timelinePosts, setTimelinePosts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const getPosts = async () => {
      const res = await axios.get("/posts/timeline/" + user._id);
      setTimelinePosts(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    };
    getPosts();
  }, [user._id]);

  return (
    <div className="container">
      <div className="home-page">
        <div className="home-page-left">
          <div className="posts">
            {timelinePosts.map((post) => (
              <Post top bottom key={post._id} post={post} />
            ))}
          </div>
        </div>
        <div className="home-page-right">
          <RightBox />
        </div>
      </div>
    </div>
  );
};
