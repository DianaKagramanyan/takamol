import React, {useState} from 'react';
import list from './data';
import Card from './Card';
import {Pagination, Stack} from "@mui/material";

const ShowCards = () => {
  const [page, setPage] = useState(1);

  const handleChange = (e, p) => {
    console.log(e, p);
    setPage(p)
  }
  // const [currentPage, setCurrentPage] = useState(1);
  // const recordsPerPage = 8;
  // const lastIndex = currentPage * recordsPerPage;
  // const firstIndex = lastIndex - recordsPerPage;
  // const records = list.slice(firstIndex, lastIndex);
  // const npage = Math.ceil(list.length / recordsPerPage);
  // const numbers = [...Array(npage + 1).keys()].slice(1);
  //
  // const prePage = () => {
  //   if (currentPage !== 1) {
  //     setCurrentPage(currentPage - 1);
  //   }
  // }
  // const changeCPage = (id) => {
  //   setCurrentPage(id);
  // }
  // const nextPage = () => {
  //   if (currentPage !== npage) {
  //     setCurrentPage(currentPage + 1);
  //   }
  // }

  return (
    <div className="section-1">
      <section>
        {
          list.map((item) =>
            (<Card key={item.id} item={item}/>
            ))}
      </section>
      <Stack className="pagination" spacing={2}>
        <Pagination count={8} onClick={handleChange}/>
      </Stack>

      {/*<nav>*/}
      {/*  <ul>*/}
      {/*    <li>*/}
      {/*      <a href="#" onClick={prePage}>Prev</a>*/}
      {/*    </li>*/}
      {/*    {*/}
      {/*      numbers.map((n, i) => (*/}
      {/*        <li key={i}>*/}
      {/*          <a href="#" onClick={() => changeCPage(n)}>{n}</a>*/}
      {/*        </li>*/}
      {/*      ))*/}
      {/*    }*/}
      {/*    <li>*/}
      {/*      <a href="#" onClick={nextPage}>Next</a>*/}
      {/*    </li>*/}
      {/*  </ul>*/}
      {/*</nav>*/}
    </div>
  );
};

export default ShowCards;
