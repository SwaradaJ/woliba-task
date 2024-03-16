import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[22px]",
  circle: "rounded-[50%]",
};
const variants = {
  fill: {
    light_blue_900_19: "bg-light_blue-900_19",
    green_400: "bg-green-400 text-white-A700",
    light_blue_900: "bg-light_blue-900 text-white-A700",
    light_green_50: "bg-light_green-50 text-blue-200",
    light_blue_900_0c: "bg-light_blue-900_0c text-light_blue-900",
    blue_200: "bg-blue-200 text-white-A700",
  },
  outline: {
    light_blue_900_99: "border-light_blue-900_99 border border-solid text-light_blue-900",
  },
};
const sizes = {
  "4xl": "h-[50px] px-2.5",
  "5xl": "h-[62px] px-8 text-2xl",
  xs: "h-[32px] px-3 text-sm",
  md: "h-[36px] px-[34px] text-xs",
  lg: "h-[40px] px-5 text-sm",
  "3xl": "h-[50px] px-5 text-base",
  sm: "h-[32px] px-[7px]",
  "2xl": "h-[44px] px-4 text-base",
  xl: "h-[42px] px-3",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "xl",
  color = "blue_200",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round", "circle"]),
  size: PropTypes.oneOf(["4xl", "5xl", "xs", "md", "lg", "3xl", "sm", "2xl", "xl"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "light_blue_900_19",
    "green_400",
    "light_blue_900",
    "light_green_50",
    "light_blue_900_0c",
    "blue_200",
    "light_blue_900_99",
  ]),
};

export { Button };
