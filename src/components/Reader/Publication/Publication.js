import React from 'react';
import PropTypes from 'prop-types';

const Publication = ({ title, text, currentPage }) => (
  <article>
    <h2>{`${currentPage}. ${title}`}</h2>
    <p>{text}</p>
  </article>
);

Publication.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default Publication;
