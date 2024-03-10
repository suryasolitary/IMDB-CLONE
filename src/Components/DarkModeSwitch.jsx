"use client";

import React, { useEffect, useState } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";

export default function DarkModeSwitch() {
  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  //   console.log("theme : ", theme);
  //   console.log("settheme : ", setTheme);
  //   console.log("system theme : ", systemTheme);
  const [mounted, setmounted] = useState(false);
  useEffect(() => setmounted(true), []);

  return (
    <div>
      {mounted &&
        (currentTheme == "dark" ? (
          <MdLightMode
            className="text-2xl select-none cursor-pointer"
            onClick={() => setTheme("light")}
          />
        ) : (
          <MdDarkMode
            className="text-2xl select-none cursor-pointer"
            onClick={() => setTheme("dark")}
          />
        ))}
    </div>
  );
}
