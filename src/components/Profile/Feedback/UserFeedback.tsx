import { Feedback } from "@/interface/feedback";
import FeedbackItem from "./FeedbackItem";

const UserFeedback = () => {

    const feedbacks: Feedback[] = [
        {
            name: "Nguoi danh gia so 1",
            time: "3 tháng trước",
            rating_star: 5,
            comment: "Giao hàng nhanh mới đặt một hai ngày mà đã nhận được rồi cảm ơn shop nhé",
            product: "Bàn Học, Bàn Làm Việc Gỗ"
        },
        {
            name: "Nguoi danh gia so 2",
            time: "3 tháng trước",
            rating_star: 5,
            comment: "Giao hàng nhanh mới đặt một hai ngày mà đã nhận được rồi cảm ơn shop nhé",
            product: "Bàn Học, Bàn Làm Việc Gỗ"
        },
        {
            name: "Nguoi danh gia so 3",
            time: "3 tháng trước",
            rating_star: 5,
            comment: "Giao hàng nhanh mới đặt một hai ngày mà đã nhận được rồi cảm ơn shop nhé",
            product: "Bàn Học, Bàn Làm Việc Gỗ"
        }
    ];

    return (
        <div className="flex flex-col grow px-7 pt-8 pb-5 w-full bg-white border border-black border-solid rounded-[30px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <h2 className="self-start text-4xl font-semibold text-black">Đánh giá</h2>
            <div className="flex flex-col mt-8 max-md:max-w-full">
                {feedbacks.map((feedback, index) => (
                    <FeedbackItem key={index} {...feedback}/>
                ))}
            </div>
        </div>
    );
};


export default UserFeedback