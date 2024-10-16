import { Dropdown, MenuProps } from "antd";
import { HiDotsHorizontal } from "react-icons/hi";

interface DropdownCustomProps {
  items: MenuProps['items'];
}

const DropdownCustom = ({ items }: DropdownCustomProps) => {
  return (
    <Dropdown menu={{ items }} placement="bottomRight" trigger={['click']} arrow>
      <div className="p-3 cursor-pointer rounded-full hover:bg-gray-200 transition-all duration-300">
        <HiDotsHorizontal className="w-6 h-6" />
      </div>
    </Dropdown>
  );
};

export default DropdownCustom;
