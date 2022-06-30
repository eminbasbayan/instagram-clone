import { Avatar } from "@mui/material";
import "./chatOnline.css";

export const ChatOnline = () => {
  return (
    <div className="chat-online">
      <div className="chat-online-friend">
        <div className="chat-online-img-container">
          <Avatar src="/images/person/2.png" />
          <span className="chat-online-badge"></span>
        </div>
        <div className="chat-online-name">bedirhan</div>
      </div>
    </div>
  );
};
