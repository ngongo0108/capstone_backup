import About from "./FooterItem/About";
import CustomerSupport from "./FooterItem/CustomerSupport";
import DownloadApp from "./FooterItem/DownloadApp";

const Footer = () => {
  return (
    <footer className="flex flex-wrap justify-center gap-x-40 self-center mt-44 max-md:mt-10 max-md:mr-5 max-md:max-w-full">
      <CustomerSupport />
      <About />
      <DownloadApp />
      <div className="self-center mb-10 text-xl text-black mx-auto text-center w-full">
        REAS©2024
      </div>
    </footer>
  );
};

export default Footer;
