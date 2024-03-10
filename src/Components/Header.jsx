import React from "react";
import Menubars from "./Menubars";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";

export default function Header() {
  return (
    <div className="flex justify-between items-center p-4 max-w-6xl mx-auto">
      <div className="flex gap-4 p-3">
        <Menubars title="Home" address="/" Icon={AiFillHome} />
        <Menubars title="About" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div className="flex gap-4 items-center  ">
        <DarkModeSwitch />
        <Link href={"/"} className="flex gap-2 items-center">
          <span className="text-xl font-semibold bg-amber-500 py-1 px-2  rounded-lg hover:shadow-lg">
            IMDb
          </span>
          <span className="text-lg hidden sm:inline font-semibold  ">
            Clone
          </span>
        </Link>
      </div>
    </div>
  );
}
