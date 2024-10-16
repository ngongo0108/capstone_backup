import { Avatar, Card } from "antd";

export interface CardProp {
  prop: Card;
}
export interface Card {
  avatar: string;
  username: string;
  context: string;
  imgProduct: string;
  handle: () => void;
}
const ItemPost: React.FC<CardProp> = ({ prop }) => {
  return (
    <div
      className="flex flex-row items-center justify-between py-4 gap-2 border-b-2 w-full"
      onClick={() => prop.handle}
    >
      <Avatar className="min-w-fit" size="large" src={prop.avatar} alt="" />
      <div className="flex flex-col justify-evenly w-full">
        <label className="text-start font-medium">{prop.username}</label>
        <label className="text-start text-gray-500">{prop.context}</label>
      </div>
      <img
        src={prop.imgProduct}
        alt=""
        className="w-8 h-auto rounded-lg mr-2"
      />
    </div>
  );
};

export default ItemPost;
