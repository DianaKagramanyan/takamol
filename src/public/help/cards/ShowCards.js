import React, {useEffect, useRef, useState} from 'react';
import list from './data';
import Card from './Card';
import {Pagination, Stack} from "@mui/material";
import ScrollToBottom from "./scrollToBottom";

const ShowCards = () => {
    // const [page, setPage] = useState(1);
    //
    // const handleChange = (e, p) => {
    //   console.log(e, p);
    //   setPage(p)
    // }

    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 8;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = list.slice(firstIndex, lastIndex);
    const npage = Math.ceil(list.length / recordsPerPage);
    const numbers = [...Array(npage + 1).keys()].slice(1);

    const prePage = () => {
      if (currentPage !== 1) {
        setCurrentPage(currentPage - 1);
      }
    };

    const changeCPage = (id) => {
      //store the current scroll position
      const scrollPosition = window.scrollY;

      //Smoothly scroll to the top of the component
      window.scroll({
        top: 0,
        behavior: "smooth",
      });

      //set the new page after the scroll animation is complete
      setTimeout(() => {
        setCurrentPage(id);

        //Restore the previous scroll position
        window.scroll({
          top: scrollPosition,
        });
      }, 1); // Adjust timeout value as needed
    }


    const nextPage = () => {
      if (currentPage !== npage) {
        setCurrentPage(currentPage + 1);
      }
    }

//Capture and restore scroll position
// const [scrollPosition, setScrollPosition] = useState(0);

// useEffect(() => {
//   //Capture the current vertical scroll position
//   setScrollPosition(window.scrollY);
// }, [currentPage])

// useEffect(() => {
//   //Restore the captured vertical scroll position
//   window.scrollTo(0, scrollPosition);
// }, [scrollPosition]);


    return (
      <div className="section-1">
        <section>
          {
            records.map((item) =>
              (<Card key={item.id} item={item}/>
              ))}
        </section>
        <Stack className="pagination" spacing={2}>
          <Pagination count={8}/>
        </Stack>

        <nav>
          <ul className="page-main">
            <li className="page">
              <a className="page" href="#" onClick={prePage}>Prev</a>
            </li>
            {
              numbers.map((n, i) => (
                <li className="page" key={i}>
                  <a className="page" href="#" onClick={() => changeCPage(n)}>{n}</a>
                </li>
              ))
            }
            <li className="page">
              <a className="page" href="#" onClick={nextPage}>Next</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
;

export default ShowCards;
