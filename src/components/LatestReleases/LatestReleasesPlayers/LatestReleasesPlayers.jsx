import React, { useState } from 'react';
import LatestReleaesItem from './LatestReleasesItem/LatestReleasesItem';

import scss from './LatestReleasesPlayers.module.scss';

function LatestReleasesPlayers() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(null);

  const handleVideoPlay = index => {
    setCurrentVideoIndex(index);
  };

  const handleVideoPause = () => {
    setCurrentVideoIndex(null);
  };

  return (
    <ul className={scss.listPlayers}>
      <LatestReleaesItem
        handleVideoPlay={handleVideoPlay}
        handleVideoPause={handleVideoPause}
        currentVideoIndex={currentVideoIndex}
        valueText="текст/text"
      />
    </ul>
  );
}

export default LatestReleasesPlayers;
