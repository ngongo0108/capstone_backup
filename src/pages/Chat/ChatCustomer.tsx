import { Footer, Header } from "@/components";
import ChatBottom from "@/components/ChatComponent/ChatBottom";
import ChatHeader from "@/components/ChatComponent/ChatHeader";
import ItemChange from "@/components/ChatComponent/ItemChange";
import { Divider } from "antd";
import ImageAvatar from "@/assets/avatar.png";
import ListOfChat from "@/components/ChatComponent/ListOfChat";
import ContextMesage, {
  MessProp,
} from "@/components/ChatComponent/ContextMessage";

const ChatCustomer = () => {
  const listMess: MessProp[] = [
    {
      avatar: "https://cdn-icons-png.flaticon.com/512/4333/4333609.png",
      context: "hello",
      time: "11:11",
      status: false,
    },
    {
      avatar: "https://cdn-icons-png.flaticon.com/512/4333/4333609.png",
      context: "hello",
      time: "11:11",
      status: false,
    },
    {
      avatar: "https://cdn-icons-png.flaticon.com/512/4333/4333609.png",
      context: "hello",
      time: "11:11",
      status: true,
    },
    {
      avatar: "https://cdn-icons-png.flaticon.com/512/4333/4333609.png",
      context: "hello",
      time: "11:11",
      status: true,
    },
  ];
  return (
    <div className="flex flex-col items-center ">
      <Header />
      <div className="w-2/3 mt-10">
        <h1 className="font-bold text-2xl w-full text-start text-black">
          Đoạn chat
        </h1>
        <Divider
          variant="solid"
          style={{ borderColor: "#000000" }}
          className="mt-3 mb-0"
        />
        <div className="flex flex-row min-h-fit">
          {/* list user */}
          <div className="border-l-2 py-2 px-4 p-2 w-1/2">
            <ListOfChat />
          </div>

          {/* conversion */}
          <div className="border-x-2 w-full flex flex-col ">
            <div className="flex-shrink-0">
              <ChatHeader avatar="" name="nguoi ban so 1" />
            </div>

            {/* Item Change / Content */}
            <div className="flex-1 overflow-y-auto">
              <ItemChange img={ImageAvatar} name="cai ban" price="500 000đ" />
              {listMess.map((item, index) => (
                <ContextMesage prop={item} key={index} />
              ))}
            </div>

            {/* Chat Bottom */}
            <div className="flex-shrink-0">
              <ChatBottom />
            </div>
          </div>
        </div>

        <Divider
          variant="solid"
          style={{ borderColor: "#000000" }}
          className="m-0"
        />
      </div>
      <Footer />
    </div>
  );
};

export default ChatCustomer;
