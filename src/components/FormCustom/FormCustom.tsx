import React from "react";
import { Link } from "react-router-dom";
import InputStyle from "../Input/Input";
import ButtonCustom from "../Button/Button";

interface Prop {
  prop: FormProp;
}
export interface FormProp {
  lable: string;
  lableButton: string;
  input: inputFormProp[];
  subLable?: string;
  something: something;
  handle: () => void;
}
export interface inputFormProp {
  icon?: React.ReactElement;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  type: typeInput;
}
export type typeInput = "text" | "password";
export interface something {
  link: string;
  lable?: string;
  text: string;
}

const renderInput = (input: inputFormProp, index: number) => {
  return (
    <>
      <br />
      <InputStyle
        key={index}
        prop={{
          icon: input.icon,
          placeholder: input.placeholder,
          onChange: input.onChange,
          value: input.value,
          type: input.type,
        }}
      />
    </>
  );
};
const FormCustom: React.FC<Prop> = ({ prop }) => {
  return (
    <>
      <h1 className="text-5xl font-bold w-full text-start text-amber-900 pt-4">
        {prop.lable}
      </h1>

      <p className="text-lg font-normal w-full text-start text-gray-500 pt-4 pb-4">
        {prop.subLable}
      </p>

      <div className="flex flex-col justify-around">
        {prop.input.map((inputProp, index) => renderInput(inputProp, index))}
      </div>

      <p className="text-gray-700 text-left pt-4 pb-4">
        {prop.something?.lable}
        <Link to={prop.something.link} className="text-blue-600">
          {prop.something.text}
        </Link>
      </p>
      <ButtonCustom text={prop.lableButton} handle={prop.handle} />
    </>
  );
};

export default FormCustom;
