import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Person {
  name: string;
  company: string;
  imageUrl: string;
  theme: string;
}

// Define theme types
type ThemeColors = {
  filesHeaderBgColor: string;
  mainContentBgColor: string;
  topHeaderBgColor: string;
  iconsSidebarBgColor: string;
  headerFileBgColor: string;
  explorerSidebarBgColor: string;
  //
  activeLineColor: string;
  activeTabColor: string;
  //
  activeColor: string;
  subTextColor: string;
  secondaryColor: string;
  //
  lightGray: string;
  darkGray: string;
};

type ThemeName =
  | "Github Dark"
  | "Solarized Light"
  | "Cobalt2"
  | "Github Light"
  | "Ayu Green Dark"
  | "Night Owl";

// Define available themes
const themes: Record<ThemeName, ThemeColors> = {
  "Github Dark": {
    filesHeaderBgColor: "#0d1117",
    mainContentBgColor: "#0d1117",
    topHeaderBgColor: "#0d1117",
    iconsSidebarBgColor: "#0d1117",
    headerFileBgColor: "#0d1117",
    explorerSidebarBgColor: "#010409",
    activeLineColor: "#f78166",
    activeTabColor: "#2d3139",
    activeColor: "#fff",
    subTextColor: "#d4d5d6",
    secondaryColor: "#96bbdb",
    lightGray: "#797f84",
    darkGray: "#191d23",
  },
  "Solarized Light": {
    filesHeaderBgColor: "#d9d2c2",
    mainContentBgColor: "#fdf6e3",
    topHeaderBgColor: "#eee8d5",
    iconsSidebarBgColor: "#ddd6c1",
    headerFileBgColor: "#fdf6e3",
    explorerSidebarBgColor: "#eee8d5",
    activeLineColor: "#584c27",
    activeTabColor: "#d1cbb8",
    activeColor: "#616161",
    subTextColor: "#584c27",
    secondaryColor: "#b58900",
    lightGray: "#aea894",
    darkGray: "#d9d2c2",
  },
  Cobalt2: {
    filesHeaderBgColor: "#122738",
    mainContentBgColor: "#193549",
    topHeaderBgColor: "#15232d",
    iconsSidebarBgColor: "#122738",
    headerFileBgColor: "#122738",
    explorerSidebarBgColor: "#15232d",
    activeLineColor: "#f0f1f2D",
    activeTabColor: "#193549",
    activeColor: "#fdfdfd",
    subTextColor: "#a6a6a7",
    secondaryColor: "#93a4b7",
    lightGray: "#717d88",
    darkGray: "#002b36",
  },
  "Github Light": {
    filesHeaderBgColor: "#f6f8fa",
    mainContentBgColor: "#ffffff",
    topHeaderBgColor: "#ffffff",
    iconsSidebarBgColor: "#ffffff",
    headerFileBgColor: "#f6f8fa",
    explorerSidebarBgColor: "#f6f8fa",
    activeLineColor: "#fda28e ",
    activeTabColor: "#e8ebef",
    activeColor: "#202936",
    subTextColor: "#545975",
    secondaryColor: "#424b54",
    lightGray: "#656d76",
    darkGray: "#f2f2f2",
  },
  "Ayu Green Dark": {
    filesHeaderBgColor: "#0b0e14",
    mainContentBgColor: "#0b0e14",
    topHeaderBgColor: "#0b0e14",
    iconsSidebarBgColor: "#0b0e14",
    headerFileBgColor: "#0b0e14",
    explorerSidebarBgColor: "#0b0e14",
    activeLineColor: "#19966f",
    activeTabColor: "#171b24",
    activeColor: "#dbe8e1",
    subTextColor: "#b3b19f",
    secondaryColor: "#e7ceae",
    lightGray: "#6b7d8b",
    darkGray: "#171a20",
  },
  "Night Owl": {
    filesHeaderBgColor: "#011627",
    mainContentBgColor: "#011627",
    topHeaderBgColor: "#011627",
    iconsSidebarBgColor: "#011627",
    headerFileBgColor: "#01111d",
    explorerSidebarBgColor: "#011627",
    activeLineColor: "#5f7e97",
    activeTabColor: "#0b2942",
    activeColor: "#99afd8",
    subTextColor: "#8cb3e7",
    secondaryColor: "#cad4e7",
    lightGray: "#6681a3",
    darkGray: "#031d44",
  },
};

const ThemeSwitcher: React.FC = () => {
  const [currentTheme, setCurrentTheme] = useState<ThemeName>(() => {
    const storedTheme = localStorage.getItem("theme") as ThemeName;
    return themes[storedTheme] ? storedTheme : "Github Dark"; // Validate stored theme
  });

  useEffect(() => {
    if (themes[currentTheme]) {
      // Ensure theme exists
      handleThemeChange(themes[currentTheme]);
      localStorage.setItem("theme", currentTheme);
    }
  }, [currentTheme]);

  const handleThemeChange = (theme: ThemeColors) => {
    // Apply the theme colors to the document or context
    document.documentElement.style.setProperty(
      "--filesHeaderBgColor",
      theme.filesHeaderBgColor
    );
    document.documentElement.style.setProperty(
      "--mainContentBgColor",
      theme.mainContentBgColor
    );
    document.documentElement.style.setProperty(
      "--topHeaderBgColor",
      theme.topHeaderBgColor
    );
    document.documentElement.style.setProperty(
      "--iconsSidebarBgColor",
      theme.iconsSidebarBgColor
    );
    document.documentElement.style.setProperty(
      "--headerFileBgColor",
      theme.headerFileBgColor
    );
    document.documentElement.style.setProperty(
      "--explorerSidebarBgColor",
      theme.explorerSidebarBgColor
    );
    document.documentElement.style.setProperty(
      "--activeLineColor",
      theme.activeLineColor
    );
    document.documentElement.style.setProperty(
      "--activeTabColor",
      theme.activeTabColor
    );
    document.documentElement.style.setProperty(
      "--activeColor",
      theme.activeColor
    );
    document.documentElement.style.setProperty(
      "--subTextColor",
      theme.subTextColor
    );
    document.documentElement.style.setProperty(
      "--secondaryColor",
      theme.secondaryColor
    );
    document.documentElement.style.setProperty("--lightGray", theme.lightGray);
    document.documentElement.style.setProperty("--darkGray", theme.darkGray);
  };

  return (
    <div>
      {Object.keys(themes).map((themeName) => (
        <Button
          key={themeName}
          onClick={() => setCurrentTheme(themeName as ThemeName)}
        >
          {themeName}
        </Button>
      ))}
    </div>
  );
};

export default ThemeSwitcher;
