import React from "react";

export default function TableDataList({ children }) {
  return (
    <td className="px-4 py-2 text-gray-600 border border-gray-200">
      {children}
    </td>
  );
}
