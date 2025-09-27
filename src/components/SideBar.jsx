import React from "react";

export default function SideBar({ children }) {
  return (
    <div className="flex flex-col items-start bg-gray-800 text-white h-[95vh] w-60 p-6 gap-4 shadow-lg">
      {children}
    </div>
  );
}
