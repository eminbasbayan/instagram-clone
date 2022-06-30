import { Avatar } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import "./conversation.css";

export const Conversation = ({ conversation, currentUser }) => {
  const [user, setUser] = useState({});

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentUser._id);

    const getUser = async () => {
      try {
        const res = await axios.get("/users?userId=" + friendId);
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [currentUser, conversation]);

  return (
    <div className="conversation">
      <Avatar
        className="conversation-img"
        src={user?.profilePicture && PF + user.profilePicture}
      />
      <div className="conversation-name">{user.username}</div>
    </div>
  );
};
