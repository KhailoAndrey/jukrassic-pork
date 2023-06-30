import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as PlayIcon } from '../../../../../images/Common/svg/play.svg';

import scss from './LatestReleaesIconPlay.module.scss';

function LatestReleaesIconPlay({ currentVideoIndex, index }) {
  return (
    <div
      className={`${scss.iconContainer} ${
        currentVideoIndex === index ? scss.hidden : ''
      }`}
    >
      <PlayIcon className={scss.iconPlay} />
    </div>
  );
}

LatestReleaesIconPlay.propTypes = {
  currentVideoIndex: PropTypes.number,
  index: PropTypes.number.isRequired,
};

export default LatestReleaesIconPlay;
