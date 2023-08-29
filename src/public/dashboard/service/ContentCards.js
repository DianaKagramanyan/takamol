import React from 'react';
import DisplayCard from "../../services/DisplayCard";
import {InputAdornment, TextField} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

const ContentCards = () => {
  return (
    <div className="grid-container-cards">
      <div className="grid-header">Services</div>
      <div className="grid-search">
        <TextField
          id="outlined-basic"
          variant="outlined"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconButton size="small"  >
                  <SearchIcon sx={{color: 'orange'}}  />
                </IconButton>
              </InputAdornment>
            ),
          }}
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
