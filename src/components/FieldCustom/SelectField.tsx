import { SelectFieldProps } from '@/interface/field';

const SelectField = ({ label, id, value, onChange, options } : SelectFieldProps) => (
  <div className="flex flex-col mb-4">
    <label htmlFor={id} className="font-medium text-lg text-left">
      {label}
    </label>
    <select
      id={id}
      className="px-4 py-3 mt-2 border border-gray-300 rounded-md"
      value={value}
      onChange={onChange}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

export default SelectField;
