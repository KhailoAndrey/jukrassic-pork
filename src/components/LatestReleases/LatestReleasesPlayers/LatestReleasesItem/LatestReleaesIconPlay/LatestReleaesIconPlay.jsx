import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as PlayIcon } from '../../../../../images/Common/svg/play.svg';

import scss from '../LatestReleasesItem.module.scss';

function LatestReleaesIconPlay({ currentVideoIndex, indexItem }) {
  return (
    <div
      className={`${scss.iconContainer} ${
        currentVideoIndex === indexItem ? scss.hidden : ''
      }`}
    >
      <PlayIcon className={scss.iconPlay} />
    </div>
  );
}

LatestReleaesIconPlay.propTypes = {
  currentVideoIndex: PropTypes.number,
  indexItem: PropTypes.string.isRequired,
};

export default LatestReleaesIconPlay;
