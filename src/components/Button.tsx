import { ButtonHTMLAttributes } from "react";

type ButtonSize = "small" | "medium" | "large";
type ButtonColor = "primary" | "secondary";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  color?: ButtonColor;
  title: string;
}

export const Button: React.FC<ButtonProps> = ({
  size = "medium",
  color = "primary",
  title,
  onClick,
  type = "button",
  ...props
}) => {
  const defaultClass =
    "flex items-center justify-center rounded-2 h-[40px] px-4 py-2 border w-fit cursor-pointer";

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
      small: "rounded-[100px] text-sm",
      medium: "rounded-[14px] text-base",
      large: "rounded-[16px] text-base min-h-[56px]",
    },
  };

  const buttonClass = [
    defaultClass,
    classes.sizes[size],
    classes.colors[color]?.button,
  ].join(" ");

  const textClass = classes.colors[color]?.text;

  return (
    <button
      type={type}
      onClick={onClick}
      className={buttonClass}
      style={{ boxShadow: "0 0px 10px rgba(0, 0, 0, 1)" }}
      {...props}
    >
      <span className={textClass}>{title}</span>
    </button>
  );
};

export default Button;