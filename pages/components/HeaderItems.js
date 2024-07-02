import React from "react";

const HeaderItems = ({ Icon, title }) => {
  return (
    <div className="group text-white flex flex-col items-center w-12 sm:w-20 ">
      <Icon className="h-8 mb-1 group-hover:animate-bounce group-hover:text-red-300" />

      <p className="tracking-widest opacity-0 group-hover:opacity-100">
        {title}
      </p>
    </div>
  );
};

export default HeaderItems;
