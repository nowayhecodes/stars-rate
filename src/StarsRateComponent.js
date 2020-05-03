import React, { Component } from "react";
import PropTypes from "prop-types";

import "./star.css";

const Star = ({ selected = false, onClick = (f) => f }) => (
  <div className={selected ? "star selected" : "star"} onClick={onClick}></div>
);

Star.propTypes = {
  selected: PropTypes.bool,
  onClick: PropTypes.func,
};

const StarsRate = ({
  starsSelected = 0,
  totalStars = 5,
  onRate = (f) => f,
}) => {
  return (
    <div className="star-rating">
      {[...Array(totalStars)].map((n, i) => (
        <Star
          key={i}
          selected={i < starsSelected}
          onClick={() => onRate(i + 1)}
        />
      ))}
    </div>
  );
};

StarsRate.propTypes = { totalStars: PropTypes.number };
StarsRate.defaultProps = { totalStars: 5 };

export default StarsRate;
