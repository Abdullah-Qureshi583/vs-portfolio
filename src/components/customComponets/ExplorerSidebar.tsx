import { fileType } from "@/types/file";
import { useState } from "react";
import ExplorerInnerContent from "./ExplorerInnerContent";
const ExplorerSidebar = ({
  files,
  activeFileName,
  setOpenFiles,
  setActiveFileName,
  isMobileView,
  isDesktopView,
  setIsExplorerSheet,
}: {
  files: fileType[];
  activeFileName: string;
  setOpenFiles: any;
  setActiveFileName: any;
  isMobileView: boolean;
  isDesktopView: boolean;
  setIsExplorerSheet?: any;
}) => {
  const [sidebarWidth, setSidebarWidth] = useState(220); // Initial width
  // Function to handle dragging
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();

    const startX = e.clientX;
    const startWidth = sidebarWidth;

    const handleMouseMove = (e: MouseEvent) => {
      const newWidth = startWidth + (e.clientX - startX);
      if (newWidth >= 200 && newWidth <= 400) {
        // Set limits: Min 200px, Max 400px
        setSidebarWidth(newWidth);
      }
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  // Function to open/close files in the sidebar
  const handleOpenFiles = (newFile: fileType) => {
    setOpenFiles((prev: fileType[]) => {
      if (!prev.some((file) => file.name === newFile.name)) {
        return [...prev, newFile];
      }
      return prev;
    });
    setActiveFileName(newFile.name);
  };

  return (
    <div className={`relative flex ${isMobileView ? "w-full " : ""} `}>
      {/* Sidebar */}
      <ExplorerInnerContent
        isMobileView={isMobileView}
        setIsExplorerSheet={setIsExplorerSheet}
        sidebarWidth={isDesktopView && sidebarWidth}
        files={files}
        handleOpenFiles={handleOpenFiles}
        activeFileName={activeFileName}
      />

      {/* Drag Handle */}
      {isDesktopView && (
        <div
          className="w-1 bg-gray-700 hover:bg-gray-500 cursor-ew-resize"
          onMouseDown={handleMouseDown}
        />
      )}
    </div>
  );
};

export default ExplorerSidebar;

// import { fileType } from "@/types/file";
// import { useState } from "react";
// import ExplorerInnerContent from "./ExplorerInnerContent";
// const ExplorerSidebar = ({
//   files,
//   activeFileName,
//   setOpenFiles,
//   setActiveFileName,
// }: {
//   files: fileType[];
//   activeFileName: string;
//   setOpenFiles: any;
//   setActiveFileName: any;
// }) => {
//   const [sidebarWidth, setSidebarWidth] = useState(220); // Initial width
//   console.log("in the explorer the open files are ", files);

//   // Function to handle dragging
//   const handleMouseDown = (e: React.MouseEvent) => {
//     e.preventDefault();

//     const startX = e.clientX;
//     const startWidth = sidebarWidth;

//     const handleMouseMove = (e: MouseEvent) => {
//       const newWidth = startWidth + (e.clientX - startX);
//       if (newWidth >= 200 && newWidth <= 400) {
//         // Set limits: Min 200px, Max 400px
//         setSidebarWidth(newWidth);
//       }
//     };

//     const handleMouseUp = () => {
//       document.removeEventListener("mousemove", handleMouseMove);
//       document.removeEventListener("mouseup", handleMouseUp);
//     };

//     document.addEventListener("mousemove", handleMouseMove);
//     document.addEventListener("mouseup", handleMouseUp);
//   };

//   // Function to open/close files in the sidebar
//   const handleOpenFiles = (newFile: fileType) => {
//     setOpenFiles((prev: fileType[]) => {
//       if (!prev.some((file) => file.name === newFile.name)) {
//         return [...prev, newFile];
//       }
//       return prev;
//     });
//     setActiveFileName(newFile.name);
//   };

//   return (
//     <div className="relative flex">
//       {/* Sidebar */}
//       <ExplorerInnerContent
//         sidebarWidth={sidebarWidth}
//         files={files}
//         handleOpenFiles={handleOpenFiles}
//         activeFileName={activeFileName}
//       />

//       {/* Drag Handle */}
//       <div
//         className="w-1 bg-gray-700 hover:bg-gray-500 cursor-ew-resize"
//         onMouseDown={handleMouseDown}
//       />
//     </div>
//   );
// };

// export default ExplorerSidebar;
