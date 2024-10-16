import { Carousel } from "antd";
import banner from "@/assets/image 3.png";
import ItemCategoryStyle, {
  ItemCategory,
} from "@/components/Category/ItemCategory";
import { Footer, Header, TitleStyle } from "@/components";
import ProductCardStyle, {
  ItemProduct,
} from "@/components/ProductCard/ProductCard";
const Home: React.FC = () => {
  const itemCate: ItemCategory[] = [
    {
      icon: "https://cdn-icons-png.flaticon.com/512/3174/3174566.png",
      text: "Bàn ghế",
      handle: () => handleItem(),
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/3174/3174566.png",
      text: "Bàn ghế",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/3174/3174566.png",
      text: "Bàn ghế",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/3174/3174566.png",
      text: "Bàn ghế",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/3174/3174566.png",
      text: "Bàn ghế",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/3174/3174566.png",
      text: "Bàn ghế",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/3174/3174566.png",
      text: "Bàn ghế",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/3174/3174566.png",
      text: "Bàn ghế",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/3174/3174566.png",
      text: "Bàn ghế",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/3174/3174566.png",
      text: "Bàn ghế",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/3174/3174566.png",
      text: "Bàn ghế",
    },
  ];

  const itemProduct: ItemProduct[] = [
    {
      img: "https://bangheth.com/wp-content/uploads/2021/09/ban-chan-sat-gap-chan-den1.jpg",
      title: "Bàn làm việc chân xếp gọn ",
      price: "500",
    },
    {
      img: "https://bizweb.dktcdn.net/100/407/310/products/ghe-an-122t.jpg?v=1611581696317",
      title: "Bàn làm việc chân xếp gọn ",
      price: "500",
    },
    {
      img: "https://bangheth.com/wp-content/uploads/2021/09/ban-chan-sat-gap-chan-den1.jpg",
      title: "Bàn làm việc chân xếp gọn ",
      price: "500",
    },
    {
      img: "https://bangheth.com/wp-content/uploads/2021/09/ban-chan-sat-gap-chan-den1.jpg",
      title: "Bàn làm việc chân xếp gọn ",
      price: "500",
    },
    {
      img: "https://bangheth.com/wp-content/uploads/2021/09/ban-chan-sat-gap-chan-den1.jpg",
      title: "Bàn làm việc chân xếp gọn ",
      price: "500 000",
    },
    {
      img: "https://bangheth.com/wp-content/uploads/2021/09/ban-chan-sat-gap-chan-den1.jpg",
      title: "Bàn làm việc chân xếp gọn ",
      price: "500 000",
    },
  ];
  const handleItem = () => {
    alert("Bàn ghế");
  };
  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex flex-col justify-center self-center w-2/3">
        <div className="relative">
          <Carousel autoplay>
            <div>
              <img src={banner} className="w-full" />
            </div>
            <div>
              <img src={banner} className="w-full" />
            </div>
          </Carousel>

          <div className="absolute left-14 -bottom-1/3 p-4 mt-2 mb-2 flex flex-1 flex-col text-left rounded-2xl shadow-lg w-11/12 bg-white ">
            <h2 className="text-3xl font-bold p-4 pb-8">Danh mục nổi bật</h2>
            <div className="grid grid-cols-8 gap-0">
              {itemCate.map((item, index) => (
                <ItemCategoryStyle key={index} prop={item} />
              ))}
            </div>
          </div>
        </div>
        <div className="mt-48">
          <TitleStyle
            text="Tin nổi bật"
            icon="https://cdn-icons-png.flaticon.com/512/3024/3024539.png"
          />
        </div>

        <div className="grid grid-cols-4 gap-0 justify-center item-center">
          {itemProduct.map((item, index) => (
            <ProductCardStyle key={index} prop={item} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
