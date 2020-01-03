import React from 'react';
import PropTypes from 'prop-types';

const Publication = ({ title, text }) => (
  <article>
    <h2>{title}</h2>
    <p>{text}</p>
  </article>
);

Publication.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Publication;
