import { NavLink } from "react-router-dom";
import ImgAvatar from "@/assets/avatar.png";
import IconLike from "@/assets/like.svg";
import RatingStarCustom from "../RatingCustom/RatingStarCustom";

const UserProfile = () => {
    return (
        <div className="flex flex-col w-full max-md:ml-0 max-w-full">
            <div className="flex flex-col items-center mt-8 w-full text-2xl max-md:mt-10">
                <img loading="lazy" src={ImgAvatar} alt="User Profile Picture" className="object-contain max-w-full aspect-square w-[250px]" />
                <h2 className="mt-6 mb-6 text-4xl font-medium text-black w-full">
                    Nguyen Van A
                </h2>
                <div className="mt-5">
                    <RatingStarCustom rating={3.0}/>
                </div>
                <NavLink className="flex gap-3.5 mt-5 max-w-full text-black text-opacity-60 w-[178px]" to="/profile/feedback">
                    <img loading="lazy" src={IconLike} alt="Review Icon" className="object-contain shrink-0 aspect-square w-[30px]" />
                    <div className="grow shrink w-[129px]">
                        25 đánh giá
                    </div>
                </NavLink>
                <NavLink to={"/edit-profile"} className="self-stretch px-4 py-3.5 mt-7 text-center rounded-xl bg-zinc-300 text-black text-opacity-50 max-md:px-5 hover:bg-zinc-400 transition-all duration-300">
                    Sửa thông tin cá nhân
                </NavLink>
            </div>
        </div>
    )
};

export default UserProfile