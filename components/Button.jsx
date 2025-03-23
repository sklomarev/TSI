import React from "react";
export const Button = (props) => {
  const { size, color, title } = props;
  // класс по умолчанию
  const defaultClass =
    "flex items-center rounded-2 h-[40px] px-4 py-2 border w-fit";

  const classes = {
    colors: {
      primary: {
        button: "bg-black",
        text: "text-white",
      },
      secondary: {
        button: "bg-white",
        text: "text-black",
      },
    },
    sizes: {
      small: "rounded-[100px] font-sm",
      medium: "rounded-[14px] font-base",
      large: "rounded-[16px] font-base min-h-[56px]",
    },
  };

  return (
    <div className={defaultClass + " " + classes.sizes[size] + " " + classes.colors[color].button}>
      <div className={classes.colors[color].text}>{title}</div>
    </div>
  );
};
