import ImgQrCode from "@/assets/qrcode.png";
import ImgGgPlay from "@/assets/googleplay.png";

const DownloadApp = () => {
    return (
        <section className="flex flex-col items-start pr-16 min-w-[240px] w-[382px]">
          <h2 className="text-3xl font-semibold text-black">
            Tải ứng dụng REAS <br />
          </h2>
          <div className="flex gap-3 mt-9">
            <img loading="lazy" src={ImgQrCode} alt="QR Code" className="object-contain shrink-0 max-w-full aspect-square w-[100px]" />
            <img loading="lazy" src={ImgGgPlay} alt="App Store Download" className="object-contain shrink-0 my-auto max-w-full aspect-[3.03] w-[200px]" />
          </div>
        </section>
    );
}

export default DownloadApp