import { Avatar } from "@mui/material";
import "./conversation.css";

export const Conversation = () => {
  return (
    <div className="conversation">
      <Avatar className="conversation-img" src={"/images/person/0.png"} />
      <div className="conversation-name">eminbasbayan</div>
    </div>
  );
};
