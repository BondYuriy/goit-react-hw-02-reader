import React, { Component } from 'react';
import PropTypes from 'prop-types';
import arrayLength from '../../services/arrayLength';
import Controls from './Controls/Controls';
import Progress from './Progress/Progress';
import Publication from './Publication/Publication';

export default class Reader extends Component {
  static defaultProps = {
    items: [],
  };

  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
      }).isRequired,
    ),
  };

  state = { publicationIndex: 0 };

  hanfleIncrement = () => {
    const { publicationIndex } = this.state;
    const { items } = this.props;

    const maxCounter = arrayLength(items);

    if (maxCounter > publicationIndex + 1) {
      this.setState(prevState => ({
        publicationIndex: prevState.publicationIndex + 1,
      }));
    }
  };

  hanfleDecrement = () => {
    const { publicationIndex } = this.state;

    if (publicationIndex >= 1) {
      this.setState(prevState => ({
        publicationIndex: prevState.publicationIndex - 1,
      }));
    }
  };

  render() {
    const { items } = this.props;
    const { publicationIndex } = this.state;
    const publication = items[publicationIndex];
    const { title, text } = publication;

    return (
      <div>
        <Controls
          onPrevClick={this.hanfleDecrement}
          onNextClick={this.hanfleIncrement}
          prevBtnDisabled={publicationIndex === 0}
          nextBtnDisabled={arrayLength(items) === publicationIndex + 1}
        />
        <Progress
          currentPage={publicationIndex + 1}
          totalPages={arrayLength(items)}
        />
        <Publication
          title={title}
          text={text}
          currentPage={publicationIndex + 1}
        />
      </div>
    );
  }
}
