import React from 'react';
import { ReactComponent as PlayIcon } from '../../../../images/Latest-Releases/svg/play.svg';

import scss from './LatestReleaesIconPlay.module.scss';

function LatestReleaesIconPlay() {
  return (
    <div className={scss.iconContainer}>
      <PlayIcon className={scss.iconPlay} />
    </div>
  );
}

export default LatestReleaesIconPlay;
