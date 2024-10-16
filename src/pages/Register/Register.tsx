import LogoREAS from "@/assets/Logo.png";
import { CiUser, CiMail } from "react-icons/ci";
import LoginWithGg from "../Login/LoginWithGg";
import FormCustom, { FormProp } from "@/components/FormCustom/FormCustom";
import { FormLoginWithGg } from "@/pages/Login/LoginWithGg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register: React.FC = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const handleRegister = async (formData: {
    email: string;
    name: string;
    password: string;
    confirmPassword: string;
  }) => {
    try {
      alert(
        formData.email +
          "; " +
          formData.name +
          ";" +
          formData.password +
          ";" +
          formData.confirmPassword
      );
      navigate("/login");
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const register: FormProp = {
    lable: "Đăng ký tài khoản",
    lableButton: "Đăng ký",
    input: [
      {
        icon: <CiMail />,
        placeholder: "Email",
        value: email,
        onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value),
        type: "text",
      },
      {
        icon: <CiUser />,
        placeholder: "Họ và tên",
        value: name,
        onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
          setName(e.target.value),
        type: "text",
      },
      {
        placeholder: "Mật khẩu",
        value: password,
        onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
          setPassword(e.target.value),
        type: "password",
      },
      {
        placeholder: "Xác nhận mật khẩu",
        value: confirmPassword,
        onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
          setConfirmPassword(e.target.value),
        type: "password",
      },
    ],
    subLable: "Chào mừng bạn đến với REAS - Thiên đường của đồ gia dụng",
    something: {
      link: "/policy",
      lable: "Bằng việc Đăng kí tài khoản, bạn đã đọc và đồng ý với REAS về ",
      text: "Điều khoản sử dụng và Chính sách bảo mật",
    },
    handle: () => handleRegister({ email, name, password, confirmPassword }),
  };

  const LoginGg: FormLoginWithGg = {
    label: "Nếu bạn đã có tài khoản, vui lòng ",
    text: "đăng nhập tại đây.",
    link: "/login",
  };

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div></div>
      <div className="flex flex-row justify-evenly items-center">
        <img src={LogoREAS} />
        <div className="flex flex-col justify-between rounded-3xl shadow-lg p-10 m-8 min-h-[500px] w-full max-w-xl">
          <FormCustom prop={register} />
          <LoginWithGg prop={LoginGg} />
        </div>
      </div>
      <p className="pb-5">REAS©2024</p>
    </div>
  );
};

export default Register;
