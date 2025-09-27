import React from "react";

export default function TableHead({ children }) {
  return (
    <th className="px-4 py-2 text-left font-semibold text-gray-700 border border-gray-200">
      {children}
    </th>
  );
}
