import LogoREAS from "@/assets/Logo.png";
import { FormCustom } from "@/components";
import { FormProp } from "@/components/FormCustom/FormCustom";
import { FormLoginWithGg } from "@/pages/Login/LoginWithGg";
import { CiUser } from "react-icons/ci";
import LoginWithGg from "./LoginWithGg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginApi } from "@/apis/auth";
import { LoginRequest } from "@/interface";
import { useDispatch } from "react-redux";
import { login } from "@/redux/slices/authSlice";
const Login: React.FC = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (formData: { email: string; password: string }) => {
    try {
      const data: LoginRequest = {
        password: password,
        username: email,
      };
      const res = await loginApi(data);
      if (res.onSuccess) {
        alert(res.message);
        dispatch(login(res.data));
      } else {
        alert(res.message);
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const loginForm: FormProp = {
    lable: "Đăng nhập",
    subLable: "Chào mừng bạn đến với REAS - Thiên đường của đồ gia dụng",
    lableButton: "Đăng nhập",
    input: [
      {
        icon: <CiUser />,
        placeholder: "Email",
        type: "text",
        value: email,
        onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value),
      },
      {
        placeholder: "Password",
        type: "password",
        value: password,
        onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
          setPassword(e.target.value),
      },
    ],
    something: {
      link: "/sendOTP",
      text: "Quên mật khẩu ?",
      lable: "",
    },
    handle: () => handleLogin({ email, password }),
  };

  const LoginGg: FormLoginWithGg = {
    label: "Nếu bạn chưa có tài khoản, vui lòng ",
    text: "đăng kí tài khoản tại đây.",
    link: "/register",
  };

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div></div>
      <div className="flex flex-row justify-evenly items-center">
        <img src={LogoREAS} />
        <div className="flex flex-col justify-between rounded-3xl shadow-lg p-10 m-8 min-h-[500px] w-full max-w-xl">
          <FormCustom prop={loginForm} />
          <LoginWithGg prop={LoginGg} />
        </div>
      </div>
      <p className="pb-5">REAS©2024</p>
    </div>
  );
};

export default Login;
