import React, {useState} from 'react';
import list from './data';
import Card from './Card';
import {Pagination, Stack} from "@mui/material";

const ShowCards = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 8;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = list.slice(firstIndex, lastIndex);
    const npage = Math.ceil(list.length / recordsPerPage);
    const handlePageChange = (event, page) => {
      setCurrentPage(page);
    };

    return (
      <div className="section-1">
        <section>
          {
            records.map((item) =>
              (<Card key={item.id} item={item}/>
              ))}
        </section>

        <Stack className="pagination-container" spacing={2}>
          <Pagination
            count={npage}
            page={currentPage}
            onChange={handlePageChange}
            classes={{ul: 'custom-pagination'}}
          />
        </Stack>
      </div>
    );
  }
;

export default ShowCards;
