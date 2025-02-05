"use client";
import { fileType } from "@/types/file";
import React, { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

interface Props {
  sidebarWidth: number | false;
  activeFileName: string;
  isMobileView: boolean;

  files: fileType[];
  handleOpenFiles: any;
  setIsExplorerSheet: any;
}
const ExplorerInnerContent = ({
  isMobileView,
  sidebarWidth,
  files,
  handleOpenFiles,
  activeFileName,
  setIsExplorerSheet,
}: Props) => {
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(true);
  return (
    <div
      className="h-full bg-explorerSidebarBgColor   text-activeColor p-4"
      style={sidebarWidth ? { width: `${sidebarWidth}px` } : { width: "100%" }}
    >
      {/* Explorer Title (Fixed) */}
      <h2 className="text-sm tracking-wider ">EXPLORER</h2>

      {/* Portfolio Section */}
      <div className="mt-4">
        {/* Portfolio Title (Toggle Dropdown) */}
        <div
          className="flex items-center justify-start gap-2 cursor-pointer"
          onClick={() => setIsPortfolioOpen(!isPortfolioOpen)}
        >
          {isPortfolioOpen ? (
            <FaChevronDown className="text-activeColor duration-300 transition-all" />
          ) : (
            <FaChevronRight className="text-inActiveText duration-300 transition-all" />
          )}
          <h3
            className={`text-sm font-bold ${
              isPortfolioOpen ? "text-activeColor" : "text-inActiveText"
            }`}
          >
            PORTFOLIO
          </h3>
        </div>

        {/* Portfolio Files (Dropdown) */}
        {isPortfolioOpen && (
          <div className="mt-2 space-y-2">
            {files.map((file, index) => (
              <div
                onClick={() => {
                  handleOpenFiles(file);
                  if (isMobileView) {
                    setIsExplorerSheet(false);
                  }
                }}
                key={index}
                className={`flex items-center space-x-2  hover:text-activeColor px-2 cursor-pointer ${
                  activeFileName == file.name
                    ? "bg-zinc-700 text-activeColor"
                    : "text-inActiveText"
                } `}
              >
                {file.icon}
                <span>{file.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ExplorerInnerContent;
