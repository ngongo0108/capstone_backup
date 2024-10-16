import IconNotification from "@/assets/notification.svg";
import IconSupport from "@/assets/support.svg";
import IconChat from "@/assets/chat.png";
import IconShopping from "@/assets/shopping.png";
import IconPost from "@/assets/post.png";

const IconGroup = () => {
    const icons = [
        { src: IconPost, alt: "Post" },
        { src: IconShopping, alt: "Shopping" },
        { src: IconChat, alt: "Chat" },
        { src: IconNotification, alt: "Notification" },
        { src: IconSupport, alt: "Customer Support" }
    ];

    return (
    <div className="flex flex-auto gap-2.5 items-center min-h-[50px]">
        {icons.map((icon, index) => (
            <img key={index} loading="lazy" src={icon.src} alt={icon.alt} className="object-contain cursor-pointer shrink-0 self-stretch my-auto aspect-square w-[35px]" />
        ))}
    </div>
    );
};

export default IconGroup