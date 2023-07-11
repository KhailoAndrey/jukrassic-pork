import React from 'react';
import { ReactComponent as PlayIcon } from '../../../../../images/Common/svg/play.svg';

import scss from '../LatestReleasesItem.module.scss';

function LatestReleaesIconPlay() {
  return (
    <div className={scss.iconContainer}>
      <PlayIcon className={scss.iconPlay} />
    </div>
  );
}

export default LatestReleaesIconPlay;
