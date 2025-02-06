import { ThemeColors } from "@/types/theme";

export const handleThemeChange = (theme: ThemeColors) => {
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
