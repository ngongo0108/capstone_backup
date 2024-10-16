import { Avatar } from "antd";

interface UserInfoProps {
  name: string,
  avatar: string,
  avatarPosition?: 'left' | 'right',
  size?: number
}

const UserInfo: React.FC<UserInfoProps> = ({ name, avatar, avatarPosition = 'left', size = 45 }) => {
  return (
    <div className="flex items-center text-2xl font-medium text-center text-black min-h-[50px]">
      {avatarPosition === 'left' && <Avatar src={avatar} size={size} />}
      
      <div className="self-stretch my-auto w-[199px]">
        {name}
      </div>
      
      {avatarPosition === 'right' && <Avatar src={avatar} size={size} />}
    </div>
  );
}

export default UserInfo;