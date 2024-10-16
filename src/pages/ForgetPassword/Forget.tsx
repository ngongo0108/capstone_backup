import LogoREAS from "@/assets/Logo.png";
import FormForget, { FormForgetPass } from "@/components/FormCustom/FormForget";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Forget: React.FC = () => {
  const [newPass, setNewPass] = useState("");
  const [cfNewPass, setCfNewPass] = useState("");
  const navigate = useNavigate();

  const handleGoback = () => {
    navigate("/sendOTP");
  };
  const handleLogin = () => {
    alert("New pas: " + newPass + "; Confirm Pass: " + cfNewPass);
    navigate("/login");
  };

  const formForget: FormForgetPass = {
    lable: "Lấy lại mật khẩu",
    input: [
      {
        placeholder: "Mật khẩu mới",
        type: "password",
        value: newPass,
        onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
          setNewPass(e.target.value),
      },
      {
        placeholder: "Xác nhận lại mật khẩu",
        type: "password",
        value: cfNewPass,
        onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
          setCfNewPass(e.target.value),
      },
    ],
    button: [
      {
        text: "Quay lại",
        handle: () => handleGoback(),
      },
      {
        text: "Xác nhận",
        handle: () => handleLogin(),
      },
    ],
  };
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div></div>
      <div className="flex flex-row justify-evenly items-center">
        <img src={LogoREAS} />
        <div className="flex flex-col justify-start rounded-3xl shadow-lg p-10 m-8 min-h-[500px] w-full max-w-xl">
          <FormForget prop={formForget} />
        </div>
      </div>
      <p className="pb-5">REAS©2024</p>
    </div>
  );
};
export default Forget;
