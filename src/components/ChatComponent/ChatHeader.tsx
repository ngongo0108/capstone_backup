import { Avatar } from "antd";
import React from "react";
import { BsThreeDots } from "react-icons/bs";

export interface UserProp {
  avatar: string;
  name: string;
}
const ChatHeader: React.FC<UserProp> = ({ avatar, name }) => {
  return (
    <div className="flex flex-row justify-between items-center border-b-2 p-4">
      <div className="flex flex-row gap-4 ">
        <Avatar size="large" src={avatar} />
        <label className="font-medium text-2xl text-black"> {name}</label>
      </div>
      <BsThreeDots className="w-8 h-8" />
    </div>
  );
};

export default ChatHeader;
