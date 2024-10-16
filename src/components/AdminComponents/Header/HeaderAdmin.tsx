import Logo from "@/assets/Logo.png";
import DropdownStyle from "@/components/Dropdown";
import { DropdownProp } from "@/components/Dropdown/DropdownStyle";
import InputStyle from "@/components/Input/Input";
import { Avatar } from "antd";
import { useState } from "react";
import { BsBell, BsChatDots } from "react-icons/bs";
import { CiSearch, CiSettings } from "react-icons/ci";
import { FaRegMoon } from "react-icons/fa";
import { IoExitOutline } from "react-icons/io5";

const HeaderAdmin = () => {
  const [search, setSearch] = useState("");
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      alert("Search: " + search);
    }
  };

  const itemDropdown: DropdownProp[] = [
    {
      key: 1,
      text: "Cài đặt tài khoản",
      icon: <CiSettings className="w-4 h-4" />,
    },
    {
      key: 2,
      text: "Chế độ màn hình",
      icon: <FaRegMoon className="w-4 h-4" />,
    },
    {
      key: 3,
      text: "Đăng suất",
      icon: <IoExitOutline className="w-4 h-4" />,
    },
  ]
  return (
    <div className="navbar bg-white flex-row items-center text-black">
      <div className="flex-1">
        <img className="w-14 h-14" src={Logo} alt="" />
        <a className="btn btn-ghost text-xl text-black">REAS</a>
      </div>
      <div className="flex justify-around items-center gap-2 w-5/6">
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
        <div className="flex flex-row gap-4 mx-8">
          <BsChatDots className="w-8 h-8"/>
          <BsBell className="w-8 h-8"/>
        </div>
        <div className="dropdown dropdown-end w-1/5">
          <div tabIndex={0} className="flex justify-end items-center">
            <label className="mx-4">Nguyen Văn Khanh</label>
            <Avatar className="min-w-fit" size="large" src="" alt="" />
          </div>
          <DropdownStyle props={itemDropdown} />
        </div>
      </div>
    </div>
  );
};

export default HeaderAdmin;
