import React from "react";

export interface TitleProp {
  text: string;
  icon?: string;
}

const TitleStyle: React.FC<TitleProp> = ({ text, icon }) => {
  return (
    <div className="flex flex-row justify-between items-center bg-gray-300  rounded-lg p-4 mt-4 mb-4">
      <h1 className="font-bold text-2xl"> {text} </h1>
      <img src={icon} alt="icon" className="w-8 h-8" />
    </div>
  );
};

export default TitleStyle;
