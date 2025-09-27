import React from "react";
import TableHead from "./TableHead";
import TableDataList from "./TableDataList";

export default function Table({ columns, data }) {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse border border-gray-400 shadow-sm rounded-lg">
        <thead className="bg-gray-300">
          <tr>
            {columns.map((column) => (
              <TableHead key={column.id}>{column.label}</TableHead>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr
              key={row.id}
              className="even:bg-gray-150 hover:bg-gray-300 transition"
            >
              {columns.map((column) => (
                <TableDataList key={column.id}>
                  {row[column.id]}
                </TableDataList>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
