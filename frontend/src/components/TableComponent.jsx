import React, { useEffect, useState } from "react";
import { getTableData } from "../axiosCalls";

const TableComponent = () => {
  const [tableData, setTableData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const fetchData = async () => {
    try {
      const res = await getTableData();
      setTableData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = tableData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="p-4 w-[80%] relative">
      <table className="min-w-full bg-white rounded-2xl  shadow-xl  ">
        {/* Table header */}
        <thead className="">
          <tr>
            <th className="py-3 px-4 border-2">ID</th>
            <th className="py-3 px-4 border-2">Name</th>
            <th className="py-3 px-4 border-2">Quantity</th>
            <th className="py-3 px-4 border-2">Price</th>
          </tr>
        </thead>
        {/* Table body */}
        <tbody>
          {currentItems.map((item) => (
            <tr
              key={item.id}
              className={item.id % 2 === 0 ? " bg-slate-100 " : ""}
            >
              <td className="py-3 px-4 border-2">{item.id}</td>
              <td className="py-3 px-4 border-2">{item.name}</td>
              <td className="py-3 px-4 border-2">{item.quantity}</td>
              <td className="py-3 px-4 border-2">{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Pagination controls */}
      <div className="mt-2 absolute left-1/2 ">
        {Array.from({ length: Math.ceil(tableData.length / itemsPerPage) }).map(
          (item, index) => (
            <button
              key={index}
              className={`mx-1 px-3 py-1 rounded ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default TableComponent;
