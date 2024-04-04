import { useState } from "react";
import CalcPagination from "./CalcPagination";

const Pagination = () => {
  const dummyData = Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    name: `Product${index + 1}`,
  }));
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  function handlePageChange(currentPage) {
    setCurrentPage(currentPage);
  }
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentListOfItems = dummyData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-8">Pagination</h1>
      <ul className="list-items grid gap-4 max-w-500px mx-auto mt-8">
        {currentListOfItems.map((listItem) => (
          <li
            className="p-4 bg-purple-600 text-white font-semibold"
            key={listItem.id}
          >
            {listItem.name}
          </li>
        ))}
      </ul>
      <CalcPagination
        currentPage={currentPage}
        totalPages={Math.ceil(dummyData.length / itemsPerPage)}
        onPageChange={handlePageChange}
      />
    </div>
  );
};
export default Pagination;
