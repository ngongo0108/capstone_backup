import React from "react";

export interface CategoryProp {
  prop: ItemCategory;
}
export interface ItemCategory {
  icon: string;
  text: string;
  handle?: () => void;
}
const ItemCategoryStyle: React.FC<CategoryProp> = ({ prop }) => {
  return (
    <div
      className="p-2 m-4 flex flex-col justify-between items-center rounded-lg border border-orange-400"
      onClick={prop.handle}
    >
      <img src={prop.icon} className="w-8 h-8" />
      <p>{prop.text}</p>
    </div>
  );
};

export default ItemCategoryStyle;
