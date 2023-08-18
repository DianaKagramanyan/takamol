import React from 'react';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

const Background = () => {
  return (
    <div className="background">
      <h2 className="header-background">The platform allows beneficiaries to access the services of the</h2>
      <h2 className="header-background2">Rehabilitation and Social Guidance Agency, which aims to:</h2>

      <div className="withIcon">
        <div><CheckCircleRoundedIcon className="icon-check"/></div>
        <div className="background-desc">Empowering people with disabilities</div>
      </div>

      <div className="withIcon">
        <div><CheckCircleRoundedIcon className="icon-check"/></div>
        <div className="background-desc">Care and empowerment of orphans</div>
      </div>

      <div className="withIcon">
        <div><CheckCircleRoundedIcon className="icon-check"/></div>
        <div className="background-desc">Care of the elderly</div>
      </div>

      <div className="withIcon">
        <div><CheckCircleRoundedIcon className="icon-check"/></div>
        <div className="background-desc">Community centers</div>
      </div>

    </div>
  );
};

export default Background;
