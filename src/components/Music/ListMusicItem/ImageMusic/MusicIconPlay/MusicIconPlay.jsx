import React from 'react';
import { ReactComponent as PlayIcon } from '../../../../../images/Common/svg/play.svg';

import scss from './MusicIconPlay.module.scss';

function MusicIconPlay() {
  return (
    <div className={scss.iconContainer}>
      <PlayIcon className={scss.iconPlay} />
    </div>
  );
}

export default MusicIconPlay;
