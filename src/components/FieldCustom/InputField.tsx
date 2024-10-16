import { InputFieldProps } from "@/interface/field";

const InputField = ({
  label,
  id,
  type = "text",
  value,
  onChange,
  placeholder,
}: InputFieldProps) => (
  <div className="flex flex-col mb-4">
    <label htmlFor={id} className="font-medium text-lg text-left">
      {label}
    </label>
    <input
      type={type}
      id={id}
      className="px-4 py-3 mt-2 border border-gray-300 rounded-md"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  </div>
);

export default InputField;
