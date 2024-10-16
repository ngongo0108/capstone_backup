import { NavLink } from "react-router-dom";
import IconGroup from "./HeaderItem/IconGroup";
import SearchBar from "./HeaderItem/SearchBar";
import UserInfo from "./HeaderItem/UserInfo";
import ImgAvatar from "@/assets/avatar.png";

const Header = () => {
    return (
        <header className="flex flex-wrap gap-5 justify-between items-center px-6 w-full bg-white max-md:px-5 max-md:mr-1.5 max-md:max-w-full">
            <NavLink to="/">
                <img loading="lazy" src="/logo.png" alt="REAS Logo" className="object-contain shrink-0 self-stretch w-32 max-w-full aspect-[1.04]"/>
            </NavLink>
            <SearchBar />
            <div className="flex flex-wrap gap-4 self-stretch my-auto max-md:max-w-full">
                <IconGroup />
                <UserInfo name="Nguyen Van A" avatar={ImgAvatar} avatarPosition="right" size={50}/>
            </div>
        </header>
    );
};

export default Header