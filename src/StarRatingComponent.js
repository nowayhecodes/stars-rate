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

export default class StarRating extends Component {
  constructor(props) {
    super(props);
    this.state = { starsSelected: props.starsSelected || 0 };
    this.change = this.change.bind(this);
  }

  componentWillMount() {
    const { starsSelected } = this.props;
    if (starsSelected) {
      this.setState({ starsSelected });
    }
  }

  change(starsSelected) {
    this.setState({ starsSelected });
  }

  render() {
    const { totalStars } = this.props;
    const { starsSelected } = this.state;

    return (
      <div className="star-rating">
        {[...Array(totalStars)].map((n, i) => (
          <Star
            key={i}
            selected={i < starsSelected}
            onClick={() => this.change(i + 1)}
          />
        ))}
      </div>
    );
  }
}

StarRating.propTypes = { totalStars: PropTypes.number };
StarRating.defaultProps = { totalStars: 5 };
