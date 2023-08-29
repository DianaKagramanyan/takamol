import React from 'react';
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import DomainVerificationIcon from '@mui/icons-material/DomainVerification';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';

const ContentDashboard = () => {
  return (
    <div className="grid-container">
      <div className="grid-header">Data panel</div>
      <div className="grid-box1">
        <div>
          <div>Aplications under review</div>
          <div>264</div>
        </div>
        <div><HistoryOutlinedIcon/></div>
      </div>
      <div className="grid-box1">
        <div>
          <div>Completed applications</div>
          <div>1696</div>
        </div>
        <div><DomainVerificationIcon/></div>
      </div>
      <div className="grid-box1">
        <div>
          <div>Number of centers</div>
          <div>580</div>
        </div>
        <div><ArticleOutlinedIcon/></div>
      </div>

      <div className="grid-box4">Applications analysis</div>
      <div className="grid-box5">Submitted applications</div>
    </div>
  );
};

export default ContentDashboard;
