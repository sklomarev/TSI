import React from "react";

export const Input = ({ 
  size = "medium", 
  color = "black", 
  type = "text", 
  placeholder = "", 
  value = "", 
  onChange = () => {}, 
  name = "" 
}) => {
  const sizeClasses = {
    small: "h-8 text-sm px-3",
    medium: "h-10 text-base px-4",
    large: "h-12 text-lg px-5"
  };

  const colorClasses = {
    black: "border-gray-300 focus:border-black",
    red: "border-red-300 focus:border-red-500"
  };

  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`
        rounded-md py-2 border outline-none
        ${sizeClasses[size]}
        ${colorClasses[color]}
        bg-white
        w-full
        transition-colors duration-200
      `}
    />
  );
};