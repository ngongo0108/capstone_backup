import React from "react";
import { Input } from "antd";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export interface InputProp {
  prop: inputFormProp;
}

export interface inputFormProp {
  icon?: React.ReactElement;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  value: string;
  type: typeInput;
}
export type typeInput = "text" | "password";

const InputStyle: React.FC<InputProp> = ({ prop }) => {
  const { icon, placeholder, onChange, value, type, onKeyDown } = prop;
  return (
    <>
      {type == "text" ? (
        <>
          <Input
            className="w-full p-3 text-xl"
            size="large"
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            onKeyDown={onKeyDown}
            prefix={icon}
          />
        </>
      ) : (
        <>
          <Input.Password
            className="w-full p-3 text-xl"
            size="large"
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            onKeyDown={onKeyDown}
            iconRender={(visible) =>
              visible ? (
                <AiOutlineEye className="w-7 h-7" />
              ) : (
                <AiOutlineEyeInvisible className="w-7 h-7" />
              )
            }
          />
        </>
      )}
    </>
  );
};

export default InputStyle;
