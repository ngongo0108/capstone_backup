import ButtonCustom from "../Button/Button";
import { FiShoppingBag } from "react-icons/fi";
export interface ItemProduct {
  img: string;
  name: string;
  price: string;
}

const ItemChange: React.FC<ItemProduct> = ({ img, name, price }) => {
  return (
    <div className="flex flex-col px-6 py-2 border-b-2 shadow-md">
      <label className="w-full text-start mb-2 text-lg italic">
        Bạn đang trao đổi với người bán về sản phẩm này
      </label>
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row gap-4">
          <img className="w-1/6 h-auto" src={img} alt=" " />
          <div className="flex flex-col">
            <label className="font-semibold text-xl text-black">{name} </label>
            <label className="font-semibold text-red-700">{price} </label>
          </div>
        </div>
        <div>
          <ButtonCustom
            text="Mua ngay"
            iconbutton={<FiShoppingBag />}
            handle={() => alert("Button clicked")}
          />
        </div>
      </div>
    </div>
  );
};

export default ItemChange;
