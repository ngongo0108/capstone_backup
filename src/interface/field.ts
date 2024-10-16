type inputType = "text" | "password";

export interface InputFieldProps {
  label: string;
  id: string;
  type?: inputType;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

type Option = {
  value: string;
  label: string;
};
export interface SelectFieldProps {
  label: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Option[];
}

export interface ProfileFormValues {
  fullName: string;
  phoneNumber: string;
  address: string;
  email: string;
  cccd: string;
  gender: string;
  birthDate: string;
}
