import React from "react";

export interface ProductProp {
  prop: ItemProduct;
}

export interface ItemProduct {
  img: string;
  title: string;
  price: string;
}
const ProductCardStyle: React.FC<ProductProp> = ({ prop }) => {
  return (
    <div className="flex flex-col justify-start rounded-2xl shadow-lg m-4">
      <img src={prop.img} alt="Product" className="rounded-t-2xl w-full h-80" />
      <div className="p-4 flex flex-col items-start text-left">
        <label className="text-amber-950 font-bold text-xl mb-2">
          {prop.title}
        </label>
        <label className="text-orange-700 font-bold text-xl">
          đ {prop.price}
        </label>
      </div>
    </div>
  );
};

export default ProductCardStyle;
