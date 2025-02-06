import React from "react";

import { Button } from "@/components/ui/button";
import { ThemeName } from "@/types/theme";
import { themes } from "@/lib/themes";
import { handleThemeChange } from "@/lib/handleThemeChange";
import Image from "next/image";

const ThemeSwitcher = () => {
  // storing the theme in local storage and change the theme
  const themeChanger = (currentTheme: ThemeName) => {
    if (themes[currentTheme]) {
      handleThemeChange(themes[currentTheme]);
      localStorage.setItem("theme", currentTheme);
    }
  };

  const themeOwner: { [key: string]: string } = {
    "Github Dark": "GitHub",
    "Solarized Light": "Ryan Olson",
    Cobalt2: "Wes Bos",
    "Github Light": "Github",
    "Ayu Green Dark": "siriscmv",
    "Night Owl": "sarah.drasner",
  };
  return (
    <div className="flex  flex-wrap gap-16 justify-center items-center">
      {Object.keys(themes).map((themeName) => (
        <div
          key={themeName}
          className="flex flex-col justify-center items-center text-center gap-y-2"
        >
          <Image
            src={`/themeImages/${themeName}.png`}
            width={200}
            height={200}
            alt="Gihub Dark theme"
            className="h-24 w-24 rounded-full overflow-hidden"
          />
          <div className="flex flex-col gap-1">
            <span className="text-activeColor text-lg font-semibold">
              {themeName}
            </span>
            <span className="text-activeColor text-sm">
              {themeOwner[themeName]}
            </span>
          </div>  
          <Button
            onClick={() => themeChanger(themeName as ThemeName)}
            variant="outline"
            className="border-lightGray bg-darkGray border text-activeColor font-medium  hover:text-darkGray hover:bg-activeColor hover:border-darkGray px-4 text-sm"
          >
            Set Color Theme
          </Button>
        </div>
      ))}
    </div>
  );
};

export default ThemeSwitcher;
