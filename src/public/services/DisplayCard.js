import React, {useState} from 'react';
import cardServ from "./listOfCards";
import CenterServices2 from "./CenterServices";
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
    <div className="section-1">
      <section>
        {
          records.map((item) =>
            (<CenterServices2 key={item.id} item={item}/>
            ))}
      </section>

      <div className="pagination-container">
        <Pagination
          className="page"
          count={npage}
          page={currentPage}
          onChange={handlePageChange}
          classes={{ul: 'custom-pagination'}}
        />
      </div>

    </div>
  );
};

export default DisplayCard;
