import React, { forwardRef } from "react";
import { Avatar } from "@mui/material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import CommentIcon from "@mui/icons-material/Comment";
import LoopIcon from "@mui/icons-material/Loop";
import SendIcon from "@mui/icons-material/Send";
import InputOption from "./InputOption";

const Post = forwardRef(({ name, description, photoUrl, message }, ref) => {
  return (
    <div ref={ref} className="bg-white p-4 mb-2 rounded-lg">
      <div className="flex gap-2 items-center mb-3">
        <Avatar src={photoUrl}>{name[0]}</Avatar>
        <div className="post__info">
          <h2 className="text-base font-bold">{name}</h2>
          <p className="text-sm text-gray-500 font-medium">{description}</p>
        </div>
      </div>
      <div className="">
        <p className="text-base break-all">{message}</p>
      </div>
      <div className="flex justify-evenly">
        <InputOption Icon={ThumbUpOffAltIcon} title="Like" />
        <InputOption Icon={CommentIcon} title="Comment" />
        <InputOption Icon={LoopIcon} title="Repost" />
        <InputOption Icon={SendIcon} title="Send" />
      </div>
    </div>
  );
});

export default Post;
