import React, { useState } from "react";
import { RiImageAddLine } from "react-icons/ri";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { IoSend } from "react-icons/io5";
import InputStyle from "../Input/Input";

const ChatBottom = () => {
  const [context, setContext] = useState("");
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContext(e.target.value);
  };
  const handleSend = () => {
    alert("context sender: " + context);
    setContext("");
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };
  return (
    <div className="flex flex-row justify-start items-center border-y-2 border-spacing-2 py-2">
      <RiImageAddLine className="w-8 h-8 ml-2" />
      <MdOutlinePhotoCamera className="w-8 h-8 mx-2" />
      <InputStyle
        prop={{
          placeholder: "Nhập tin nhắn",
          onChange: handleOnChange,
          value: context,
          type: "text",
          onKeyDown: handleKeyDown,
        }}
      />
      <IoSend onClick={handleSend} className="w-8 h-8 mx-2" />
    </div>
  );
};

export default ChatBottom;
