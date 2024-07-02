import React from "react";
import { Inter } from "next/font/google";
import HeaderItems from "./HeaderItems";
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightBulbIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

const inter = Inter({ subsets: ["latin"] });
const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between h-auto mx-2">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItems title="HOME" Icon={HomeIcon} />
        <HeaderItems title="TRENDING" Icon={LightBulbIcon} />
        <HeaderItems title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItems title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderItems title="SEARCH" Icon={SearchIcon} />
        <HeaderItems title="ACCOUNT" Icon={UserIcon} />
      </div>

      <h1
        className={`text-white text-3xl max-sm:w-full text-center mr-10 font-extrabold tracking-[5px] font-hulu`}
      >
        HULU
      </h1>
    </header>
  );
};

export default Header;
