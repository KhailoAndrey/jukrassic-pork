import React, { useState } from 'react';
import sunImage from '../../../images/Latest-Releases/jpg/sun.jpg';
import pathImage from '../../../images/Latest-Releases/jpg/path.jpg';
import LatestReleaesIconPlay from './LatestReleaesIconPlay/LatestReleaesIconPlay';
import scss from './LatestReleasesPlayers.module.scss';
import ReactPlayer from 'react-player';

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
      <li className={scss.playerBox}>
        <div className={scss.dimmedOverlay}></div>
        <ReactPlayer
          className={`${scss.reactPlayer} ${
            currentVideoIndex === 0 ? scss.activePlayer : ''
          }`}
          light={sunImage}
          url="https://www.youtube.com/watch?v=5FTdGhSGtoU"
          width="343px"
          height="252px"
          playIcon={<LatestReleaesIconPlay className={scss.icon} />}
          playing={currentVideoIndex === 0}
          onPlay={() => handleVideoPlay(0)}
          onPause={handleVideoPause}
        />
        <p
          className={`${scss.textPlayer} ${
            currentVideoIndex === 0 ? scss.hiddenText : ''
          }`}
        >
          сонце/sun
        </p>
      </li>
      <li className={scss.playerBox}>
        <div className={scss.dimmedOverlay}></div>
        <ReactPlayer
          className={`${scss.reactPlayer} ${
            currentVideoIndex === 0 ? scss.activePlayer : ''
          }`}
          light={pathImage}
          url="https://www.youtube.com/watch?v=5FTdGhSGtoU"
          width="343px"
          height="252px"
          playIcon={<LatestReleaesIconPlay className={scss.icon} />}
          playing={currentVideoIndex === 1}
          onPlay={() => handleVideoPlay(1)}
          onPause={handleVideoPause}
        />
        <p
          className={`${scss.textPlayer} ${
            currentVideoIndex === 1 ? scss.hiddenText : ''
          }`}
        >
          стежка/path
        </p>
      </li>
    </ul>
  );
}

export default LatestReleasesPlayers;
