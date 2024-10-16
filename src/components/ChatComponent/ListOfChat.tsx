import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import InputStyle from "../Input/Input";
import ItemPost, { Card } from "./ItemPost";
import { Segmented } from "antd";

const ListOfChat: React.FC = () => {
  const [search, setSearch] = useState("");
  const CardMess: Card[] = [
    {
      avatar: "https://cdn-icons-png.flaticon.com/512/4333/4333609.png",
      username: "Nguoi ban so 1",
      context: "ahihihi",
      imgProduct:
        "https://bizweb.dktcdn.net/100/407/310/products/ghe-an-122t.jpg?v=1611581696317",
      handle: () => handlePick,
    },
    {
      avatar: "https://cdn-icons-png.flaticon.com/512/4333/4333609.png",
      username: "Nguoi ban so 1",
      context: "ahihihi",
      imgProduct:
        "https://bizweb.dktcdn.net/100/407/310/products/ghe-an-122t.jpg?v=1611581696317",
      handle: () => handlePick,
    },
    {
      avatar: "https://cdn-icons-png.flaticon.com/512/4333/4333609.png",
      username: "Nguoi ban so 1",
      context: "ahihihi",
      imgProduct:
        "https://bizweb.dktcdn.net/100/407/310/products/ghe-an-122t.jpg?v=1611581696317",
      handle: () => handlePick,
    },
    {
      avatar: "https://cdn-icons-png.flaticon.com/512/4333/4333609.png",
      username: "Nguoi ban so 1",
      context: "ahihihi",
      imgProduct:
        "https://bizweb.dktcdn.net/100/407/310/products/ghe-an-122t.jpg?v=1611581696317",
      handle: () => handlePick,
    },
    {
      avatar: "https://cdn-icons-png.flaticon.com/512/4333/4333609.png",
      username: "Nguoi ban so 1",
      context: "ahihihi",
      imgProduct:
        "https://bizweb.dktcdn.net/100/407/310/products/ghe-an-122t.jpg?v=1611581696317",
      handle: () => handlePick,
    },
    {
      avatar: "https://cdn-icons-png.flaticon.com/512/4333/4333609.png",
      username: "Nguoi ban so 1",
      context: "ahihihi",
      imgProduct:
        "https://bizweb.dktcdn.net/100/407/310/products/ghe-an-122t.jpg?v=1611581696317",
      handle: () => handlePick,
    },
    {
      avatar: "https://cdn-icons-png.flaticon.com/512/4333/4333609.png",
      username: "Nguoi ban so 1",
      context: "ahihihi",
      imgProduct:
        "https://bizweb.dktcdn.net/100/407/310/products/ghe-an-122t.jpg?v=1611581696317",
      handle: () => handlePick,
    },
    {
      avatar: "https://cdn-icons-png.flaticon.com/512/4333/4333609.png",
      username: "Nguoi ban so 1",
      context: "ahihihi",
      imgProduct:
        "https://bizweb.dktcdn.net/100/407/310/products/ghe-an-122t.jpg?v=1611581696317",
      handle: () => handlePick,
    },
  ];

  const itemTitle = ["Người mua", "Người bán", "Người trao đổi"];
  const handlePick = () => {
    alert("aaa");
  };
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      alert("Search: " + search);
    }
  };
  const filteredMessages = CardMess.filter(
    (item) =>
      item.username.toLowerCase().includes(search.toLowerCase()) ||
      item.context.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="flex flex-col h-fix">
      <InputStyle
        prop={{
          icon: <CiSearch />,
          placeholder: "Tìm kiếm",
          onChange: handleSearch,
          value: search,
          type: "text",
          onKeyDown: handleKeyDown,
        }}
      />
      <Segmented
        options={itemTitle}
        block
        size="large"
        className="my-4 text-md"
      />
      <div className="max-h-[600px] overflow-y-auto">
        {filteredMessages.map((item, index) => (
          <ItemPost prop={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ListOfChat;
