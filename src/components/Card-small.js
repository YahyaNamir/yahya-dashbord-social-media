import React from "react";
import "../styles/Card-small.css";

function CardSmall({ growth, pageViews, icon }) {
  return (
    <div className="card-small">
      <p className="card-small-views">page views</p>
      <p className="card-small-icon">
        <img alt="img" src={icon} />
      </p>
      <p className="card-small-number">{pageViews}</p>
      <p className="card-small-percentage">
        <span>
          <img alt="img" src="images/up.png" />
          {growth}%
        </span>
      </p>
    </div>
  );
}

export default CardSmall;
