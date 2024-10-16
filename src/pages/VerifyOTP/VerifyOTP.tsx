import LogoREAS from "@/assets/Logo.png";
import ButtonCustom from "@/components/Button/Button";
import InputStyle from "@/components/Input/Input";
import { useState } from "react";
import { CiMail } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const VerifyOTP: React.FC = () => {
  const [showOTPField, setShowOTPField] = useState(false);
  const [showInitButon, setShowInitButton] = useState(false);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleOtp = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOtp(e.target.value);
  };

  const handleSendOTP = () => {
    setShowOTPField(true);
    setShowInitButton(true);
  };
  const handleGoback = () => {
    navigate("/login");
  };
  const handleVerifyOTP = async (data: { email: string; otp: string }) => {
    try {
      alert("asndsjn " + data.email + " " + data.otp);
      navigate("/forgetpassword");
    } catch (error) {
      console.log(error);
    }
  };
  const handleSendAgain = () => {};

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div></div>
      <div className="flex flex-row justify-evenly items-center">
        <img src={LogoREAS} />
        <div className="flex flex-col justify-start rounded-3xl shadow-lg p-10 m-8 min-h-[500px] w-full max-w-xl">
          <h1 className="text-5xl font-bold w-full text-start text-amber-900 pt-8 pb-8">
            Lấy lại mật khẩu
          </h1>
          <InputStyle
            prop={{
              icon: <CiMail className="w-7 h-7" />,
              placeholder: "Email",
              onChange: handleEmail,
              value: email,
              type: "text",
            }}
          />
          <br />
          {showOTPField && (
            <div>
              <InputStyle
                prop={{
                  placeholder: "Nhập mã OTP",
                  onChange: handleOtp,
                  value: otp,
                  type: "text",
                }}
              />
              <p className="pt-4 text-blue-600">
                Mã OTP sẽ hết hiệu lực sau 1s
              </p>
            </div>
          )}

          <div className="flex flex-row justify-around items-stretch">
            {showInitButon ? (
              <>
                <ButtonCustom text="Gửi mã lại OTP" handle={handleSendAgain} />
                <ButtonCustom
                  text="Xác thực OTP"
                  handle={() => handleVerifyOTP({ email, otp })}
                />
              </>
            ) : (
              <>
                <ButtonCustom text="Quay lại" handle={handleGoback} />
                <ButtonCustom text="Gửi mã OTP" handle={handleSendOTP} />
              </>
            )}
          </div>
        </div>
      </div>
      <p className="pb-5">REAS©2024</p>
    </div>
  );
};
export default VerifyOTP;
