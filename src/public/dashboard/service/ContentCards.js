import React from 'react';
import DisplayCard from "../../services/DisplayCard";
import {TextField} from "@mui/material";

const ContentCards = () => {
  return (
    <div className="grid-container-cards">
      <div className="grid-header">Services</div>
      <div className="grid-search">
        <TextField id="outlined-basic" label="Search" variant="outlined" size="small"
                   sx={{
                     padding: "5px",
                     marginTop:"5px",
                     width: "100%",
                   }}
        />
      </div>
      <div className="display-card"><DisplayCard/></div>
    </div>
  );
};

export default ContentCards;
