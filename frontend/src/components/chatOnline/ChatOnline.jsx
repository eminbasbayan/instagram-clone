import { Avatar } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import "./chatOnline.css";

export const ChatOnline = ({ onlineUsers, currentId, setCurrentChat }) => {
  const [friends, setFriends] = useState([]);
  const [onlineFriends, setOnlineFriends] = useState([]);

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const getFriends = async () => {
      const res = await axios.get("/users/friends/" + currentId);
      setFriends(res.data);
    };
    getFriends();
  }, [currentId]);

  useEffect(() => {
    setOnlineFriends(friends.filter((f) => onlineUsers.includes(f._id)));
  }, [friends, onlineUsers]);

  return (
    <div className="chat-online">
      {onlineFriends.map((o) => (
        <div className="chat-online-friend" key={o._id}>
          <div className="chat-online-img-container">
            <Avatar src={o.profilePicture && PF + o.profilePicture} />
            <span className="chat-online-badge"></span>
          </div>
          <div className="chat-online-name">{o.username}</div>
        </div>
      ))}
    </div>
  );
};
