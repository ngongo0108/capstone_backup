import React from "react";
import { Link } from "react-router-dom";
import Google from "@/assets/Google.png";
import Facebook from "@/assets/Facebook.png";

interface Prop {
  prop: FormLoginWithGg;
}
export interface FormLoginWithGg {
  label: string;
  text: string;
  link: string;
}

const LoginWithGg: React.FC<Prop> = ({ prop }) => {
  return (
    <div>
      <p className="text-gray-700 pt-6 pb-4">
        {prop.label}
        <Link to={prop.link} className="text-blue-600">
          {prop.text}
        </Link>
      </p>
      <div className="flex flex-row justify-around items-end">
        <hr className="w-1/4" />
        <p className="mt-3">Hoặc đăng nhập bằng</p>
        <hr className="w-1/4" />
      </div>

      <br />
      <div className="flex flex-row justify-center items-stretch mt-2">
        <button className="z-0 mr-8 relative">
          <img src={Facebook} alt="Login with Facebook" />
        </button>

        <button className="relative z-10">
          <img src={Google} alt="Login with Google" />
        </button>
      </div>
    </div>
  );
};

export default LoginWithGg;
