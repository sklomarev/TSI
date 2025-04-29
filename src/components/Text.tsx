import { ReactNode } from "react";

type TextSize = "small" | "medium" | "large";
type TextColor = "black" | "red";

interface TextProps {
  size?: TextSize;
  color?: TextColor;
  children: ReactNode;
  className?: string; // Optional additional className
}

export const Text: React.FC<TextProps> = ({
  size = "medium",
  color = "black",
  children,
  className = "",
  ...props
}) => {
  const defaultClass = "py-2";

  const classes = {
    colors: {
      black: "text-black italic",
      red: "text-red-500",
    } as Record<TextColor, string>, // Ensures all colors are covered
    sizes: {
      small: "text-sm",
      medium: "text-base",
      large: "text-xl",
    } as Record<TextSize, string>, // Ensures all sizes are covered
  };

  return (
    <p
      className={`${defaultClass} ${classes.sizes[size]} ${classes.colors[color]} ${className}`}
      {...props}
    >
      {children}
    </p>
  );
};