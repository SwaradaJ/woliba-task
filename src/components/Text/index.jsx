import React from "react";

const sizes = {
  "5xl": "text-[28px] font-normal leading-8 md:text-[26px] sm:text-2xl",
  xs: "text-xs font-normal leading-[15px]",
  lg: "text-lg font-normal leading-7",
  "6xl": "text-[40px] font-medium leading-[48px] md:text-[38px] sm:text-4xl",
  "7xl": "text-[42px] font-medium leading-[48px] md:text-[38px] sm:text-[32px]",
  s: "text-sm font-medium leading-5",
  "2xl": "text-[22px] font-normal leading-7",
  "3xl": "text-2xl font-medium leading-[58px] md:text-[22px]",
  "4xl": "text-[26px] font-medium md:text-2xl sm:text-[22px]",
  xl: "text-xl font-medium leading-7",
  md: "text-base font-normal leading-[26px]",
};

const Text = ({ children, className = "", as, size = "lg", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-white-A700 font-rubik ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
