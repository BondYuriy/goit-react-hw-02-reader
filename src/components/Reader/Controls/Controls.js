import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({
  onPrevClick,
  onNextClick,
  nextBtnDisabled,
  prevBtnDisabled,
}) => (
  <section>
    <button type="button" onClick={onPrevClick} disabled={prevBtnDisabled}>
      Назад
    </button>
    <button type="button" onClick={onNextClick} disabled={nextBtnDisabled}>
      Вперед
    </button>
  </section>
);

Controls.propTypes = {
  onPrevClick: PropTypes.func.isRequired,
  onNextClick: PropTypes.func.isRequired,
  nextBtnDisabled: PropTypes.bool.isRequired,
  prevBtnDisabled: PropTypes.bool.isRequired,
};

export default Controls;
