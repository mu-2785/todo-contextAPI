import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Pagination = () => {
  const { currentPage, setCurrentPage, totalPages } = useContext(AppContext);

  return (
    <div className="m_pagination">
      {currentPage == 1 ? (
        <></>
      ) : (
        <button
          className="m_pagination_button"
          onClick={() => {
            setCurrentPage(currentPage - 1);
          }}
        >
          prev
        </button>
      )}

      {currentPage == Math.ceil(totalPages) ? (
        <></>
      ) : (
        <button
          className="m_pagination_button"
          onClick={() => {
            setCurrentPage(currentPage + 1);
          }}
        >
          next
        </button>
      )}

      <p>
        page :- {currentPage} of {Math.ceil(totalPages)}
      </p>
    </div>
  );
};

export default Pagination;
