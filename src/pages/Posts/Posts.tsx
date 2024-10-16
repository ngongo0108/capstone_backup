import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header"
import IconAdd from "@/assets/add.svg"
import EmptyPost from "@/components/PostComponent";

interface StatusTab {
    label: string,
    count: number,
}

const Posts = () => {

    const tabs: StatusTab[] = [
        { label: "Đang hiển thị", count: 0 },
        { label: "Bị từ chối", count: 0 },
        { label: "Tin nháp", count: 0 },
        { label: "Chờ phê duyệt", count: 0 },
        { label: "Đã ẩn", count: 0 },
    ];

    return (
        <div className="flex items-center overflow-hidden flex-col pb-8 bg-white">
            <Header />
            <main className="flex flex-col mt-11 w-2/3">
                {/* Balance */}
                <div className="flex items-center justify-end mb-4">
                    <label className="text-xl font-semibold">Số dư trong ví: 0đ</label>
                    <button
                        className="bg-white rounded-lg border border-red-500 border-solid shadow-sm h-[40px] min-h-[40px] w-[40px] ml-2"
                    >
                        <div className="flex justify-center items-center w-full h-full">
                            <img
                                loading="lazy"
                                src={IconAdd}
                                alt="Add Icon"
                                className="object-contain w-[18px]"
                            />
                        </div>
                    </button>
                </div>
                {/* Status Tab */}
                <div className="flex bg-yellow-200 justify-between p-3 rounded-md">
                    {tabs.map((tab, index) => (
                        <label className="text-xl font-semibold">{tab.label} ({tab.count})</label>
                    ))}
                </div>
                {/* List Post Or Empty Post */}
                    <EmptyPost label="Đăng tin"/>
            </main>
            <Footer />
        </div>
    )
}

export default Posts