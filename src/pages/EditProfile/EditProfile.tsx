import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ProfileForm from "@/components/EditProfile/ProfileForm";
import { Route, Routes, useLocation } from "react-router-dom";
import SidebarProfile from "@/components/SidebarCustom/SidebarProfile";
import SocialLink from "@/components/EditProfile/SocialLink";
import { ACCOUNT_OPTIONS } from '@/components/SidebarCustom/SidebarProfile'
import AccountSettings from "@/components/EditProfile/AccountSettings";

const EditProfile = () => {

    const location = useLocation();

    const getSidebarProfileData = () => {
        switch (true) {
            case location.pathname.startsWith('/edit-profile/social-link'):
                return {
                    title: 'Liên kết mạng xã hội',
                    selectedOption: ACCOUNT_OPTIONS.SOCIAL_LINKS
                };
            case location.pathname.startsWith('/edit-profile/account-settings'):
                return {
                    title: 'Cài đặt tài khoản',
                    selectedOption: ACCOUNT_OPTIONS.ACCOUNT_SETTINGS
                };
            case location.pathname.startsWith('/edit-profile'):
            default:
                return {
                    title: 'Thông tin cá nhân',
                    selectedOption: ACCOUNT_OPTIONS.PERSONAL_INFO
                };
        }
    };
    

    const {title, selectedOption} = getSidebarProfileData();

    return (
        <>
            <div className="flex overflow-hidden bg-white flex-col pb-8">
                <Header/>
                <main className="flex flex-row justify-between space-x-4 px-12 mt-11 w-full max-md:flex-col max-md:px-5 max-md:mt-10 max-md:max-w-full">
                    <div className="w-1/5 max-md:w-full max-md:mb-10">
                        <SidebarProfile title={title} selectedOption={selectedOption} />
                    </div>

                    <div className="w-4/5 max-md:w-full">
                        <Routes>
                            <Route path="/" element={<ProfileForm />} />
                            <Route path="/social-link" element={<SocialLink />} />
                            <Route path="/account-settings" element={<AccountSettings />} />
                        </Routes>
                    </div>
                </main>
                <Footer/>
            </div>
        </>
    );
};

export default EditProfile