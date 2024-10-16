import ImgEmpty from "@/assets/empty.png";

interface EmptyPostProps {
    label: string
}

const EmptyPost = ({ label } : EmptyPostProps) => {
    return (
        <section className="flex flex-col items-center">
            <img loading="lazy" src={ImgEmpty} alt="Empty post" className="object-contain max-w-full aspect-[0.95] w-[312px]" />
            <p className="mt-2.5 ml-3 text-2xl text-center text-black max-md:max-w-full">
                Hiện tại bạn không có bài đăng nào trong trạng thái này
            </p>
            <div className="w-1/4 rounded-xl mt-4">
                <button className="w-2/3 p-4 rounded-3xl text-2xl font-semibold bg-yellow-400 text-black">
                    {label}
                </button>
            </div>
        </section>
    )
}

export default EmptyPost