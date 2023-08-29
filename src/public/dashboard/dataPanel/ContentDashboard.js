import React from 'react';
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import DomainVerificationIcon from '@mui/icons-material/DomainVerification';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import Box from "@mui/material/Box";
import {Divider} from "@mui/material";
import Diagram from "./Diagram";
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import DoneOutlineOutlinedIcon from '@mui/icons-material/DoneOutlineOutlined';

const ContentDashboard = () => {
  return (
    <div className="grid-container">
      <div className="grid-header">Data panel</div>
      <div className="grid-box1">
        <div>
          <Box
            sx={{
              fontFamily: "Roboto, Helvetica, Arial",
              fontSize: '14px',
            }}
          >Aplications under review</Box>
          <Box
            sx={{
              fontSize: '14px',
              fontWeight: '800'
            }}
          >264</Box>
        </div>
        <div><HistoryOutlinedIcon
          sx={{
            color: "white",
            backgroundColor: "orange",
            borderRadius: "100px",
            padding: '5px',
            fontSize: '36px'
          }}
        />
        </div>
      </div>
      <div className="grid-box1">
        <div>
          <Box
            sx={{
              fontFamily: "Roboto, Helvetica, Arial",
              fontSize: '14px',
            }}
          >Completed applications</Box>
          <Box
            sx={{
              fontSize: '14px',
              fontWeight: '800'
            }}
          >1696</Box>
        </div>
        <div><DomainVerificationIcon
          sx={{
            color: "white",
            backgroundColor: "green",
            borderRadius: "100px",
            padding: '5px',
            fontSize: '36px'
          }}
        /></div>
      </div>
      <div className="grid-box1">
        <div>
          <Box
            sx={{
              fontFamily: "Roboto, Helvetica, Arial",
              fontSize: '14px',
            }}
          >Number of centers</Box>
          <Box
            sx={{
              fontSize: '14px',
              fontWeight: '800'
            }}
          >580</Box>
        </div>
        <div><ArticleOutlinedIcon
          sx={{
            color: "white",
            backgroundColor: "#3C8084",
            borderRadius: "100px",
            padding: '5px',
            fontSize: '36px'
          }}
        /></div>
      </div>

      <div className="grid-box4">
        <Box
          sx={{
            fontFamily: "Roboto, Helvetica, Arial",
            fontSize: '18px',
            padding: "8px"
          }}
        >
          Applications analysis
        </Box>
        <Divider/>
        <Diagram/>
        <div className="make-flex">
          <div className="small-flex">
            <div>
              <ErrorOutlineOutlinedIcon
                sx={{
                  color: "orange",
                }}
              /></div>
            <Box
              sx={{
                fontSize: "12px",
                fontFamily: "Roboto, Helvetica, Arial",
              }}
            >Unacceptable</Box>
            <Box
              sx={{
                color: "red",
                fontSize: "14px",
                fontWeight: '900',
                fontFamily: "Roboto, Helvetica, Arial",
              }}
            >76%</Box>
          </div>
          <div className="small-flex">
            <div>
              <HistoryOutlinedIcon
                sx={{
                  color: "orange",
                }}
              /></div>
            <Box
              sx={{
                fontSize: "12px",
                fontFamily: "Roboto, Helvetica, Arial",
              }}
            >Under review</Box>
            <Box
              sx={{
                color: "orange",
                fontSize: "14px",
                fontWeight: '900',
                fontFamily: "Roboto, Helvetica, Arial",
              }}
            >96%</Box>
          </div>
          <div className="small-flex">
            <div>
              <DoneOutlineOutlinedIcon
                sx={{
                  color: "orange",
                }}/>
            </div>
            <Box
              sx={{
                fontSize: "12px",
                fontFamily: "Roboto, Helvetica, Arial",
              }}
            >Complete</Box>
            <Box
              sx={{
                color: "green",
                fontSize: "14px",
                fontWeight: '900',
                fontFamily: "Roboto, Helvetica, Arial",
              }}
            >617%</Box>
          </div>
        </div>


      </div>
      <div className="grid-box5">
        <Box
          sx={{
            fontFamily: "Roboto, Helvetica, Arial",
            fontSize: '18px',
            padding: "8px"
          }}>
          Submitted applications
        </Box>
        <Divider/>
      </div>

    </div>
  );
};

export default ContentDashboard;
