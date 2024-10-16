import ImgAvatar from "@/assets/avatar.png";
import IconCensor from "@/assets/censor.png";
import { ButtonCustom } from "@/components";
import DisplayImage from "@/components/Details/DisplayImage";
import ItemInfo from "@/components/Details/ItemInfo";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import UserInfo from "@/components/Header/HeaderItem/UserInfo";
import DropdownCustom from "@/components/MenuCustom/DropdownCustom";
import PopupCustom from "@/components/PopupCustom";
import RatingStarCustom from "@/components/RatingCustom/RatingStarCustom";
import { MenuProps } from "antd";
import { useState } from "react";
import { MdReportProblem } from "react-icons/md";

interface DetailItems {
    item_type: string,
    item_price: number,
    title: string,
    description: string,
    usage_status: string,
    origin: string,
    created_at: string
}

const detailMenuItems: MenuProps['items'] = [
    {
        key: 'reportFeedback',
        label: "Báo cáo đánh giá",
        icon: <MdReportProblem />,
        danger: true,
    },
];

const Details = () => {
    const [popupOpen, setPopupOpen] = useState(false);

    const detailPostItems: DetailItems = {
        item_price: 600000,
        item_type: "Nồi cơm điện",
        title: "Bán lại nồi cơm điện Sharp cũ",
        description: "Nồi cơm còn sử dụng tốt, gia đình sử dụng cẩn thận không bị hư hỏng.",
        usage_status: "Đã sử dụng",
        origin: "Thái Lan",
        created_at: "Đăng 1 phút trước"
    };

    const itemInfoList = [
        { label: "Loại sản phẩm", value: detailPostItems.item_type },
        { label: "Tình trạng", value: detailPostItems.usage_status },
        { label: "Xuất xứ", value: detailPostItems.origin },
    ];

    const handleOpenPopup = () => {
        setPopupOpen(true);
    };

    const handleClosePopup = () => {
        setPopupOpen(false);
    }

    const handleSubmitReport = (selectedOption: string) => {
        console.log('Report submitted with reason:', selectedOption);
    };

    const reportOptions = [
        "Lừa đảo",
        "Trùng lặp",
        "Hàng đã bán",
        "Không liên lạc được",
        "Thông tin không đúng thực tế",
        "Hàng giả, hàng nhái, hàng dựng",
        "Lí do khác"
    ];

    const imageSrc = "https://www.chotot.com/_next/image?url=https%3A%2F%2Fcdn.chotot.com%2Fz-WaHW_tu1Yf-V_2BJ606rZ9YB_y2l_munMHJC-D8Zo%2Fpreset%3Aview%2Fplain%2Ff5a41d97cfd611c50afcab9fe72a6202-2899702422367082915.jpg&w=1920&q=100";

    return (
        <div className="flex items-center overflow-hidden flex-col pb-8 bg-white">
            <Header />
            <main className="flex flex-col mt-11 w-2/3">
                <div className="flex items-center justify-between">
                    <div className="flex gap-x-5">
                        <UserInfo name="Người bán số 1" avatar={ImgAvatar} />
                        <RatingStarCustom rating={4} />
                    </div>
                    <div className="flex gap-x-5 items-center">
                        <label className="text-black text-opacity-50 text-xl">{detailPostItems.created_at}</label>
                        <DropdownCustom items={detailMenuItems} />
                    </div>
                </div>
                {/* Detail Post */}
                <div className="flex flex-row bg-white rounded-xl shadow-md p-4 mt-5 space-x-4">
                    <div className="flex flex-col space-y-4">
                        {[imageSrc, imageSrc, imageSrc].map((src, index) => (
                            <DisplayImage key={index} src={src} alt={`Item Image ${index + 1}`} />
                        ))}
                    </div>
                    <div className="flex flex-1 justify-center">
                        <DisplayImage src={imageSrc} alt="Main Item Image" size="w-2/3 h-auto" />
                    </div>
                    <div className="flex-1 text-left">
                        <h2 className="text-3xl font-semibold">{detailPostItems.title}</h2>
                        <span className="text-red-500 font-bold text-2xl">đ {detailPostItems.item_price.toLocaleString()}</span>
                        <div className="mt-4">
                            <h2 className="text-2xl font-semibold">Mô tả mặt hàng</h2>
                            <p className="text-xl text-black text-opacity-50">{detailPostItems.description}</p>
                        </div>
                        <div className="mt-4">
                            <h2 className="text-2xl font-semibold">Thông tin cơ bản</h2>
                            <ItemInfo items={itemInfoList} />
                            <div className="flex justify-between mt-4">
                                <ButtonCustom text="Liên hệ mua hàng" />
                                <ButtonCustom text="Mua ngay" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Report */}
                <div className="flex items-center mt-4">
                    <img src={IconCensor} alt="Censor logo" className="mr-1" />
                    <p className="text-black text-opacity-50">Tin đăng này đã được kiểm duyệt. Nếu gặp vấn đề, vui lòng báo cáo tin đăng hoặc liên hệ CSKH để được trợ giúp.</p>
                </div>
                <div className="mt-4 w-1/4">
                    <ButtonCustom text="Báo cáo vi phạm" handle={handleOpenPopup} />
                </div>

                <PopupCustom isOpen={popupOpen} 
                    title="Báo cáo vi phạm"
                    subtitle="Bài đăng này có vấn đề gì?"
                    options={reportOptions}
                    label="Gửi báo cáo"
                    onClose={handleClosePopup}
                    onSubmit={handleSubmitReport} />
            </main>
            <Footer />
        </div>
    );
};

export default Details;