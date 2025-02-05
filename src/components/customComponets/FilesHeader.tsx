"use client";
import { fileType } from "@/types/file";
import React from "react";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

import { RxCross2 } from "react-icons/rx";

const FilesHeader = ({
  openFiles,
  activeFileName,
  setOpenFiles,
  setActiveFileName,
}: {
  openFiles: fileType[];
  activeFileName: string;
  setOpenFiles: any;
  setActiveFileName: any;
}) => {
  const handleCloseAllFiles = () => {
    setOpenFiles([]);
  };

  const handleCloseFile = (file: fileType, event?: React.MouseEvent) => {
    if (event) {
      event.stopPropagation(); // Prevent clicking on the file when closing from the menu
    }

    setOpenFiles((prevOpenFiles: fileType[]) => {
      const updatedOpenFiles = prevOpenFiles.filter(
        (f) => f.name !== file.name
      );

      // Update active file name after state is updated
      setActiveFileName(updatedOpenFiles.at(0)?.name || "");

      return updatedOpenFiles;
    });
  };

  const handleCloseOtherFiles = (file: fileType, event?: React.MouseEvent) => {
    if (event) {
      event.stopPropagation(); // Prevent clicking on the file when closing from the menu
    }

    setOpenFiles((prevOpenFiles: fileType[]) => {
      const updatedOpenFiles = [file]; // Keep only the file that is open

      // Update active file name after state is updated
      setActiveFileName(updatedOpenFiles.at(0)?.name || "");

      return updatedOpenFiles;
    });
  };

  return (
    <div className="bg-filesHeaderBgColor w-full flex border-b border-black overflow-x-auto  ">
      {openFiles &&
        openFiles.map((file, idx) => (
          <div onClick={() => setActiveFileName(file.name)} key={idx}>
            <ContextMenu>
              <ContextMenuTrigger>
                <div
                  className={` ${
                    activeFileName == file.name
                      ? " border-b border-activeLineColor bg-activeTabColor  text-activeColor"
                      : "border border-darkGray bg-headerFileBgColor  border-b-0 text-lightGray"
                  } flex gap-2 group   cursor-pointer items-center px-4 py-1.5`}
                >
                  {file.icon}
                  <span className="font-light text-sm">{file.name}</span>
                  <RxCross2
                    className={` ${
                      activeFileName == file.name
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    }  hover:bg-activeTabColor  rounded-md`}
                    onClick={(e) => handleCloseFile(file, e)}
                  />
                </div>
              </ContextMenuTrigger>
              {/* show the option on right click */}
              <ContextMenuContent>
                <ContextMenuItem onClick={(e) => handleCloseFile(file, e)}>
                  Close
                </ContextMenuItem>
                <ContextMenuItem onClick={() => handleCloseAllFiles()}>
                  Close All
                </ContextMenuItem>
                <ContextMenuItem
                  onClick={(e) => handleCloseOtherFiles(file, e)}
                >
                  Close Other
                </ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          </div>
        ))}
    </div>
  );
};

export default FilesHeader;
