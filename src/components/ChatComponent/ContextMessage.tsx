import React from "react";
export interface MessProp {
  avatar: string;
  context: string;
  time: string;
  status: boolean;
}
const ContextMesage: React.FC<{ prop: MessProp }> = ({ prop }) => {
  return (
    <div className="px-4">
      {/* Điều kiện hiển thị dựa trên `status` */}
      {prop.status ? (
        <div className="chat chat-start pt-3">
          <div className="w-10 rounded-full">
            <img alt="" src={prop.avatar} />
          </div>
          <div className="chat-bubble chat-bubble-info text-start w-auto max-w-2/3 bg-gray-200 text-black">
            {prop.context}
          </div>
          <div className="chat-footer opacity-50">{prop.time}</div>
        </div>
      ) : (
        <div className="chat chat-end pt-3">
          <div className="chat-bubble chat-bubble-info text-start w-auto max-w-2/3 bg-blue-500 text-white">
            {prop.context}
          </div>
          <div className="w-10 rounded-full">
            <img alt="" src={prop.avatar} />
          </div>
          <div className="chat-footer opacity-50">{prop.time}</div>
        </div>
      )}
    </div>
  );
};

export default ContextMesage;
