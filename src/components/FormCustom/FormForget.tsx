import { inputFormProp } from "./FormCustom";
import ButtonCustom, { ButtonCustomProps } from "../Button/Button";
import InputStyle from "../Input/Input";

interface Prop {
  prop: FormForgetPass;
}

export interface FormForgetPass {
  lable: string;
  input: inputFormProp[];
  button: ButtonCustomProps[];
}
const renderInput = (input: inputFormProp, index: number) => {
  return (
    <>
      <br />
      <InputStyle
        key={index}
        prop={{
          placeholder: input.placeholder,
          onChange: input.onChange,
          value: input.value,
          type: input.type,
        }}
      />
    </>
  );
};

const renderButton = (button: ButtonCustomProps, index: number) => {
  return <ButtonCustom key={index} text={button.text} handle={button.handle} />;
};

const FormForget: React.FC<Prop> = ({ prop }) => {
  return (
    <>
      <label className="text-5xl font-bold w-full text-start text-amber-900 pt-4">
        {prop.lable}
      </label>
      <div className="flex flex-col justify-around">
        {prop.input.map((inputProp, index) => renderInput(inputProp, index))}
      </div>
      <div className="flex flex-row justify-around items-stretch">
        {prop.button.map((buttonProp, index) =>
          renderButton(buttonProp, index)
        )}
      </div>
    </>
  );
};

export default FormForget;
