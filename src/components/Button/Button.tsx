import { Button } from "antd";
import { ReactNode } from "react";

export interface ButtonCustomProps {
  text: string;
  iconbutton?: ReactNode;
  handle?: () => void;
}

const ButtonCustom: React.FC<ButtonCustomProps> = ({
  iconbutton,
  text,
  handle,
}) => {
  return (
    <Button
      className="w-full mt-4 mb-4 mr-4 p-6 text-xl font-semibold bg-yellow-400 text-amber-800"
      onClick={handle}
      icon={iconbutton}
    >
      {text}
    </Button>
  );
};

export default ButtonCustom;
