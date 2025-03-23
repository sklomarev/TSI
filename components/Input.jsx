import React from "react";

export const Input = (props) => {
  const { size, color, type, placeholder } = props;
  const defaultClass = "rounded-md px-4 py-2 border outline-none";

  const classes = {
    colors: {
      black: "border-black-500",
      red: "border-red-500",
    },
    sizes: {
      small: "h-8 w-25",
      medium: "h-10 w-50",
      large: "h-32 w-100",
    },
    types: {
      text: "bg-white",
      email: "bg-red-100 italic",
    },
  };

  return (
    <input
      type={type}
      placeholder={placeholder}
      className={
        `${defaultClass} ${classes.sizes[size]} ${classes.colors[color]} ${classes.types[type]}`
      }
    />
  );
};