const CalcPagination = ({ currentPage, totalPages, onPageChange }) => {
  function generatedNoOfPages() {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }
  return (
    <div className="pagination flex justify-center items-center mt-6">
      <button
        className="pagination-btn px-4 py-2 m-1 bg-green-500 text-white rounded-lg cursor-pointer focus:outline-none"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        {" "}
        Prev
      </button>
      {generatedNoOfPages().map((pageNo) => {
        return (
          <button
            key={pageNo}
            className="pagination-btn px-4 py-2 m-1 bg-green-500 text-white rounded-lg cursor-pointer focus:outline-none"
            onClick={() => onPageChange(pageNo)}
          >
            {pageNo}
          </button>
        );
      })}
      <button
        className="pagination-btn px-4 py-2 m-1 bg-green-500 text-white rounded-lg cursor-pointer focus:outline-none"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};
export default CalcPagination;
