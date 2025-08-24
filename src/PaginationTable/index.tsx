"use client";
import React, { useState } from "react";

interface DataItem {
  id: number;
  name: string;
  age: number;
}

interface PaginatedTableProps {
  data: DataItem[];
}

export function PaginatedTable({ data }: PaginatedTableProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const totalPages = Math.ceil(data.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentRows = data.slice(startIndex, startIndex + rowsPerPage);

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePageSizeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setRowsPerPage(Number(event.target.value));
    setCurrentPage(1); // reset to page 1
  };

  return (
    <div className="p-6 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Paginated Table</h1>

      {/* Table */}
      <table className="table-auto border-collapse border border-gray-300 w-full max-w-2xl mb-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">ID</th>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Age</th>
          </tr>
        </thead>
        <tbody>
          {currentRows.map((item) => (
            <tr key={item.id} className="text-center">
              <td className="border border-gray-300 px-4 py-2">{item.id}</td>
              <td className="border border-gray-300 px-4 py-2">{item.name}</td>
              <td className="border border-gray-300 px-4 py-2">{item.age}</td>
            </tr>
          ))}
          {currentRows.length === 0 && (
            <tr>
              <td colSpan={3} className="text-center py-4 text-gray-500">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="flex items-center gap-4">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-lg text-white ${
            currentPage === 1
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          Previous
        </button>

        <span className="font-medium">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-lg text-white ${
            currentPage === totalPages
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          Next
        </button>

        {/* Rows per page selector */}
        <select
          value={rowsPerPage}
          onChange={handlePageSizeChange}
          className="border px-3 py-1 rounded-lg"
        >
          {[5, 10, 15, 20].map((size) => (
            <option key={size} value={size}>
              {size} rows/page
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

const sampleData = Array.from({ length: 42 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  age: 20 + (i % 10),
}));

export default function TablePag() {
  return (
    <div className="p-6">
      <PaginatedTable data={sampleData} />
    </div>
  );
}
