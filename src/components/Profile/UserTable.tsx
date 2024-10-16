import { useState } from "react";
import ImgEmpty from "@/assets/empty.png";

const UserTable = () => {

    const tabs = [
        {id: "selling", label: "Đang bán", count: 0},
        {id: "exchanging", label: "Đang trao đổi", count: 0},
    ];

    const [activeTab, setActiveTab] = useState('selling');

    return (
        <div className="flex flex-col ml-5 w-full max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-center py-10 pr-6 pl-6 w-full text-2xl text-center bg-white border border-black border-solid rounded-[30px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col items-center self-stretch px-16 pt-2.5 pb-2.5 w-full font-medium rounded-2xl bg-orange-500 bg-opacity-10 max-md:px-5 max-md:max-w-full">
                    <div className="flex flex-wrap gap-5 justify-between max-w-full w-full px-11">
                        {tabs.map((tab) => (
                            <div key={tab.id}
                                className={`text-black cursor-pointer ${activeTab === tab.id ? 'font-bold' : 'text-opacity-50'}`}
                                onClick={() => setActiveTab(tab.id)}>
                                    {tab.label}({tab.count})
                            </div>
                        ))}
                    </div>
                </div>
                <img loading="lazy" src={ImgEmpty} alt="No Listings" className="object-contain mt-2.5 max-w-full aspect-[0.95] w-[312px]" />
                <p className="mt-2.5 ml-3 text-black max-md:max-w-full">
                    Hiện tại bạn không có bài đăng nào trong trạng thái này
                </p>
                <button className="px-16 py-6 mt-6 ml-3 max-w-full font-semibold text-black bg-yellow-400 rounded-[30px] w-[272px] max-md:px-5 hover:bg-yellow-500 transition-all duration-300">
                    Đăng tin
                </button>
            </div>
        </div>
    );
};

export default UserTable