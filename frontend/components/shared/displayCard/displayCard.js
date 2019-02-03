import React from 'react';
import PropTypes from 'prop-types';

const DisplayCard = ({ title, description }) => {
  return (
    <div className="card">
      <div className="card-title">{title}</div>
      <div>{description}</div>
    </div>
  );
};

DisplayCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};

export default DisplayCard;
