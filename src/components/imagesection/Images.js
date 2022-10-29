import React from "react";
import womaninVideoCall from "../images/image-woman-in-videocall.jpg";
import womanVideoChatting from "../images/image-women-videochatting.jpg";
import manInMeeting from "../images/image-men-in-meeting.jpg";
import manTexting from "../images/image-man-texting.jpg";
import "./Images.css";

function Images() {
  return (
    <div id="images">
      <img src={womaninVideoCall} alt="" />
      <img src={womanVideoChatting} alt="" />
      <img src={manInMeeting} alt="" />
      <img src={manTexting} alt="" />
    </div>
  );
}

export default Images;
