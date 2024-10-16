import IconNotification from "@/assets/notification.svg";
import IconSupport from "@/assets/support.svg";
import IconChat from "@/assets/chat.png";
import IconShopping from "@/assets/shopping.png";
import IconPost from "@/assets/post.png";
import { useDispatch } from "react-redux";
import { logout } from "@/redux/slices/authSlice";

interface IconGroupProps {
  src: string;
  alt: string;
  handle: () => void;
}
const IconGroup = () => {
  const dispatch = useDispatch();
  const icons: IconGroupProps[] = [
    { src: IconPost, alt: "Post", handle: () => console.log("Post") },
    {
      src: IconShopping,
      alt: "Shopping",
      handle: () => console.log("Shopping"),
    },
    { src: IconChat, alt: "Chat", handle: () => console.log("Chat") },
    {
      src: IconNotification,
      alt: "Notification",
      handle: () => console.log("Notification"),
    },
    {
      src: IconSupport,
      alt: "Customer Support",
      handle: () => {
        dispatch(logout());
      },
    },
  ];

  return (
    <div className="flex flex-auto gap-2.5 items-center min-h-[50px]">
      {icons.map((icon, index) => (
        <img
          key={index}
          loading="lazy"
          src={icon.src}
          alt={icon.alt}
          className="object-contain cursor-pointer shrink-0 self-stretch my-auto aspect-square w-[35px]"
          onClick={icon.handle}
        />
      ))}
    </div>
  );
};

export default IconGroup;
