import DropdownCustom from "@/components/MenuCustom/DropdownCustom";
import { Feedback } from "@/interface/feedback";
import ImgAvatar from "@/assets/avatar.png";
import IconStar from "@/assets/star.svg";
import ImgBox from "@/assets/box.png";
import { MenuProps } from "antd";
import UserInfo from "@/components/Header/HeaderItem/UserInfo";

const feedbackMenuItems: MenuProps['items'] = [
    {
        key: 'reportFeedback',
        label: (
            <div className="flex">
                <p className="font-semibold">Báo cáo đánh giá</p>
            </div>
        ),
        danger: true,
    },
];

const FeedbackItem = ({ name, time, rating_star, comment, product }: Feedback) => {
    return (
        <article className="flex flex-col w-full border-t border-black border-opacity-50 max-md:max-w-full">
            <div className="flex flex-col items-start px-5 py-5 w-full bg-white border-t border-zinc-400 max-md:pl-5 max-md:max-w-full">
                <div className="flex flex-wrap gap-5 justify-between self-stretch w-full max-md:max-w-full">
                    <UserInfo name={name} avatar={ImgAvatar} />
                    <div className="flex gap-4 text-base text-zinc-500">
                        <div className="grow my-auto">{time}</div>
                        <div className="flex items-center">
                            <DropdownCustom items={feedbackMenuItems} />
                        </div>
                    </div>
                </div>
                <img loading="lazy" src={IconStar} className="object-contain mt-2.5 w-full aspect-[5.24] max-w-[131px] min-h-[21px]" alt={`Rating: ${rating_star} stars`} />
                <p className="mt-5 text-xl text-black max-md:max-w-full">{comment}</p>
                <div className="flex flex-wrap gap-2.5 px-5 py-1 mt-6 ml-4 text-base rounded-md bg-zinc-300 text-black text-opacity-60">
                    <img loading="lazy" src={ImgBox} className="object-contain shrink-0 aspect-square w-[30px]" alt="" />
                    <div className="flex-auto my-auto max-md:max-w-full">{product}</div>
                </div>
            </div>
        </article>
    );
};

export default FeedbackItem