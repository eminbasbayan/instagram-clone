import { useEffect, useState } from "react";
import TimeAgo from "react-timeago";
import turkishStrings from "react-timeago/lib/language-strings/tr";
import buildFormatter from "react-timeago/lib/formatters/buildFormatter";
import axios from "axios";
import "./message.css";

export const Message = ({ own, message, user, currentChat }) => {
  const [receiverUser, setReceiverUser] = useState();

  const formatter = buildFormatter(turkishStrings);

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const receiver = currentChat.members.find((e) => e !== user._id);

  useEffect(() => {
    const getReceiver = async () => {
      const res = await axios.get("/users/list");
      setReceiverUser(res.data.filter((u) => u._id === receiver));
    };
    getReceiver();
  }, [receiver]);

  return (
    <div className={own ? "message own" : "message"}>
      <div className="message-top">
        <img
          src={
            own
              ? user && PF + user.profilePicture
              : receiverUser && PF + receiverUser[0].profilePicture
          }
          alt=""
          className="message-img"
        />
        <p className="message-text">{message.text}</p>
      </div>
      <div className="message-bottom">
        <TimeAgo date={message.createdAt} formatter={formatter} />
      </div>
    </div>
  );
};
