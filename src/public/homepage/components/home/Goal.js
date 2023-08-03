import React from 'react';
import {imagelast} from "../../../../img";

const Goal = () => {
  return (
    <div className="goal">
      <h1 className="header-last">Our goal</h1>
      <span className="description-last">
        The rehabilitation and social guidance platform is a unified platform for developing and
        automating the services of the Rehabilitation and Social Guidance Agency. The platform
        aims to improve and facilitate access to agency services to be a meeting point between the
        Ministry of Human Resources and Social Development and the beneficiaries.
      </span>
      <img className="image-big" src={imagelast} alt="logoImage"/>

    </div>
  );
};

export default Goal;
