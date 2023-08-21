import React from 'react';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

const BackgroundRegister = () => {
  return (
    <div className="background2">
      <h2 className="header-background">Elderly care is one of the main pillars of the Rehabilitation and</h2>
      <h2 className="header-background2">Social Guidance Agency</h2>

      <div className="withIcon">
        <div><CheckCircleRoundedIcon className="icon-check"/></div>
        <div className="background-desc">Elderly care is one of the main pillars</div>
      </div>

      <div className="withIcon">
        <div><CheckCircleRoundedIcon className="icon-check"/></div>
        <div className="background-desc">Elderly care is one of the main pillars</div>
      </div>

      <div className="withIcon">
        <div><CheckCircleRoundedIcon className="icon-check"/></div>
        <div className="background-desc">Elderly care is one of the main pillars</div>
      </div>

    </div>
  );
};

export default BackgroundRegister;
