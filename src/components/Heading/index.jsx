import React from "react";

const sizes = {
  s: "text-2xl font-semibold leading-[29px] md:text-[22px]",
  md: "text-[40px] font-semibold leading-[48px] md:text-[38px] sm:text-4xl",
  xs: "text-[22px] font-semibold",
  lg: "text-9xl font-semibold leading-[132px] md:text-5xl",
};

const Heading = ({ children, className = "", size = "md", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-light_blue-900 font-rubik ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
