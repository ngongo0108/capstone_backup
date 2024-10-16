import IconFacebook from "@/assets/facebook.svg";
import IconGoogle from "@/assets/google.svg";

const SocialLink = () => {
    return (
        <section className="flex flex-col mt-12 ml-5 w-[90%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-start px-11 py-9 mx-auto w-full bg-white rounded-2xl border border-black border-solid max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <h2 className="text-2xl font-semibold text-black">
                    Liên kết mạng xã hội
                </h2>
                <p className="self-stretch mt-6 text-2xl text-left text-black text-opacity-60 max-md:max-w-full">
                    Những thông tin dưới đây chỉ mang tính xác thực. Người dùng khác sẽ không thể thấy thông tin này.
                </p>
                <h3 className="mt-7 text-2xl font-semibold text-black">Facebook</h3>
                <button className="flex gap-3.5 items-center px-4 py-2.5 mt-5 text-xl font-semibold text-black bg-white hover:bg-gray-100 transition-all duration-200 rounded-md border border-black border-solid min-h-[49px]">
                    <img loading="lazy" src={IconFacebook} alt="Facebook" className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square min-h-[32px]" />
                    <span className="self-stretch my-auto">Liên kết Facebook</span>
                </button>
                <h3 className="mt-5 text-2xl font-semibold text-black">Google</h3>
                <div className="flex gap-3.5 items-center py-2 pr-3.5 pl-4 mt-4 rounded-md bg-zinc-100 min-h-[49px]">
                    <img loading="lazy" src={IconGoogle} alt="" className="object-contain shrink-0 self-stretch my-auto aspect-[1.03] w-[34px]" />
                    <span className="self-stretch my-auto text-xl font-semibold text-black">
                        Đã liên kết Google{" "}
                    </span>
                    <button className="self-stretch my-auto text-base text-right text-indigo-700 w-[78px]">
                        Hủy
                    </button>
                </div>
            </div>
        </section>
    );
};

export default SocialLink