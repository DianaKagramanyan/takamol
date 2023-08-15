import React, {useState} from 'react';
import cardServ from "./listOfCards";
import CenterServices from "./CenterServices";

const DisplayCard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 8;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = cardServ.slice(firstIndex, lastIndex);
  const npage = Math.ceil(cardServ.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  const prePage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  const changeCPage = (id) => {
    setCurrentPage(id);
  }
  const nextPage = () => {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  }

  return (
    <div>
      <div className="grid">
        {
          records.map((item) =>
            (<CenterServices key={item.id} item={item}/>
            ))}
      </div>

      <nav>
        <ul className="page-main">
          <li className="page">
            <a className="page" href="#" onClick={prePage}>Prev</a>
          </li>
          {
            numbers.map((n, i) => (
              <li  className="page" key={i}>
                <a className="page" href="#" onClick={() => changeCPage(n)}>{n}</a>
              </li>
            ))
          }
          <li  className="page">
            <a className="page" href="#" onClick={nextPage}>Next</a>
          </li>
        </ul>
      </nav>



    </div>



  );
};

export default DisplayCard;
