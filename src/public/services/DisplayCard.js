import React, {useState} from 'react';
import cardServ from "./listOfCards";
import CenterServices from "./CenterServices";
import {Pagination} from "@mui/material";

const DisplayCard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 8;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = cardServ.slice(firstIndex, lastIndex);
  const npage = Math.ceil(cardServ.length / recordsPerPage);
  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="grid">
        {
          records.map((item) =>
            (<CenterServices key={item.id} item={item}/>
            ))}
      </div>

      <div className="pagination-container">
        <Pagination
          className="page"
          count={npage}
          page={currentPage}
          onChange={handlePageChange}
        />
      </div>

    </div>
  );
};

export default DisplayCard;
