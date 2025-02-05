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
  | "Solarized Dark"
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
    filesHeaderBgColor: "#fdf6e3",
    mainContentBgColor: "#ffffff",
    topHeaderBgColor: "#f6f8fa",
    iconsSidebarBgColor: "#f6f8fa",
    headerFileBgColor: "#fdf6e3",
    explorerSidebarBgColor: "#ffffff",
    activeLineColor: "#0969da",
    activeTabColor: "#ffffff",
    activeColor: "#24292f",
    subTextColor: "#24292f",
    secondaryColor: "#b58900",
    lightGray: "#eee8d5",
    darkGray: "#073642",
  },
  Cobalt2: {
    filesHeaderBgColor: "#193549",
    mainContentBgColor: "#0c4a6e",
    topHeaderBgColor: "#0c4a6e",
    iconsSidebarBgColor: "#0c4a6e",
    headerFileBgColor: "#193549",
    explorerSidebarBgColor: "#082f49",
    activeLineColor: "#38bdf8",
    activeTabColor: "#1e40af",
    activeColor: "#0ea5e9",
    subTextColor: "#93c5fd",
    secondaryColor: "#ffcc00",
    lightGray: "#657b83",
    darkGray: "#002b36",
  },
  "Github Light": {
    filesHeaderBgColor: "#ffffff",
    mainContentBgColor: "#ffffff",
    topHeaderBgColor: "#f6f8fa",
    iconsSidebarBgColor: "#f6f8fa",
    headerFileBgColor: "#ffffff",
    explorerSidebarBgColor: "#ffffff",
    activeLineColor: "#0969da",
    activeTabColor: "#ffffff",
    activeColor: "#24292f",
    subTextColor: "#24292f",
    secondaryColor: "#0366d6",
    lightGray: "#d1d5da",
    darkGray: "#586069",
  },
  "Solarized Dark": {
    filesHeaderBgColor: "#002b36",
    mainContentBgColor: "#161b22",
    topHeaderBgColor: "#161b22",
    iconsSidebarBgColor: "#161b22",
    headerFileBgColor: "#002b36",
    explorerSidebarBgColor: "#0d1117",
    activeLineColor: "#d73a49",
    activeTabColor: "#1f2428",
    activeColor: "#e6edf3",
    subTextColor: "#c9d1d9",
    secondaryColor: "#268bd2",
    lightGray: "#839496",
    darkGray: "#073642",
  },
  "Night Owl": {
    filesHeaderBgColor: "#3b4252",
    mainContentBgColor: "#581c87",
    topHeaderBgColor: "#6b21a8",
    iconsSidebarBgColor: "#6b21a8",
    headerFileBgColor: "#3b4252",
    explorerSidebarBgColor: "#581c87",
    activeLineColor: "#d946ef",
    activeTabColor: "#9333ea",
    activeColor: "#a855f7",
    subTextColor: "#c084fc",
    secondaryColor: "#88c0d0",
    lightGray: "#5e81ac",
    darkGray: "#4c566a",
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
    document.documentElement.style.setProperty(
      "--lightGray",
      theme.lightGray
    );
    document.documentElement.style.setProperty(
      "--darkGray",
      theme.darkGray
    );
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
