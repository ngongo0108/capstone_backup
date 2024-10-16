import Header from "@/components/Header/Header";
import UserProfile from "@/components/Profile/UserProfile";
import UserTable from "@/components/Profile/UserTable";
import { Routes, Route } from "react-router-dom";
import UserFeedback from "@/components/Profile/Feedback/UserFeedback";
import Footer from "@/components/Footer/Footer";

const Profile = () => {

    return (
        <>
            <div className="flex overflow-hidden flex-col pb-8 bg-white">
                <Header/>
                <main className="flex flex-col px-12 mt-11 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
                    <h1 className="self-start text-4xl font-semibold text-black">
                        Trang cá nhân
                    </h1>
                    <div className="mt-2.5 max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col">
                            <div className="w-1/4 max-md:w-full">
                                <UserProfile/>
                            </div>
                            <div className="w-3/4 max-md:w-full">
                                <Routes>
                                    <Route path="/" element={<UserTable/>}/>
                                    <Route path="/feedback" element={<UserFeedback/>}/>
                                </Routes>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer/>
            </div>
        </>
    );
};

export default Profile;