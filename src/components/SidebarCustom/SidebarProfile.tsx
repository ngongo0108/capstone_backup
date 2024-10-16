import { useNavigate } from "react-router-dom";

export const ACCOUNT_OPTIONS = {
  PERSONAL_INFO: 'Thông tin cá nhân',
  SOCIAL_LINKS: 'Liên kết mạng xã hội',
  ACCOUNT_SETTINGS: 'Cài đặt tài khoản',
};

interface SidebarProfileProps {
  title: string;
  selectedOption: string;
}

const SidebarProfile = ({ title, selectedOption }: SidebarProfileProps) => {
  const options = [
    { label: ACCOUNT_OPTIONS.PERSONAL_INFO, path: '/edit-profile' },
    { label: ACCOUNT_OPTIONS.SOCIAL_LINKS, path: '/edit-profile/social-link' },
    { label: ACCOUNT_OPTIONS.ACCOUNT_SETTINGS, path: '/edit-profile/account-settings' },
];

  const navigate = useNavigate();

  return (
      <section className="flex flex-col items-end w-full text-2xl max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <h1 className="self-start text-3xl font-bold text-black max-md:ml-1">
          {title}
        </h1>
        <div className="flex flex-wrap mt-5 gap-5 justify-between self-start w-full max-w-[1020px] max-md:max-w-full">
          <div className="flex flex-col my-auto text-black">
          <div className="px-10 py-9 bg-white rounded-2xl border border-black border-solid max-md:px-5 space-y-4 text-left">
              {options.map(({ label, path }) => (
                <button
                  key={label}
                  onClick={() => navigate(path)}
                  className={`w-full text-left py-2 px-4 rounded-lg transition-colors duration-300 ${selectedOption === label ? 'font-semibold' : ''} hover:font-semibold`}>
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
  );
}

export default SidebarProfile;