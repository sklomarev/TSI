import React from "react";

export const Text = (props) => {
  const { size, color, children } = props;
  const defaultClass = "py-2";

  const classes = {
    colors: {
      black: "text-black italic",
      red: "text-red-500",
    },
    sizes: {
      small: "text-sm",
      medium: "text-base",
      large: "text-xl",
    },
  };

  return (
    <p className={`${defaultClass} ${classes.sizes[size]} ${classes.colors[color]}`}>
      {children}
    </p>
  );
};
