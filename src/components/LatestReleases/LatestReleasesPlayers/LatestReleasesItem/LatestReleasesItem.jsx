import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';

import LatestReleaesIconPlay from './LatestReleaesIconPlay/LatestReleaesIconPlay';
import LatestReleaesText from './LatestReleasesText/LatestReleasesText';
import LatestReleasesVideoSlider from './LatestReleasesVideoSlider/LatestReleasesVideoSlider';

import scss from './LatestReleasesItem.module.scss';

function LatestReleaesItem({
  indexItem,
  songImage,
  songLink,
  videoTextEN,
  videoTextUA,
}) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(null);

  const handleVideoPlay = indexItem => {
    if (currentVideoIndex !== null && currentVideoIndex !== indexItem) {
      setCurrentVideoIndex(null);
    }
    setCurrentVideoIndex(indexItem);
  };

  const handleVideoPause = () => {
    setCurrentVideoIndex(null);
  };

  return (
    <li className={scss.playerBox}>
      <ReactPlayer
        className={scss.reactPlayer}
        light={songImage.url()}
        url={songLink}
        width="100%"
        height="100%"
        playIcon={
          <LatestReleaesIconPlay
            currentVideoIndex={currentVideoIndex}
            indexItem={indexItem && indexItem}
            className={scss.iconPlayRelease}
          />
        }
        playing={currentVideoIndex === indexItem}
        onPlay={() => handleVideoPlay(indexItem)}
        onPause={handleVideoPause}
      />
      <LatestReleaesText
        currentVideoIndex={currentVideoIndex}
        videoTextEN={videoTextEN}
        videoTextUA={videoTextUA}
        indexItem={indexItem && indexItem}
      />
      <LatestReleasesVideoSlider
        currentVideoIndex={currentVideoIndex}
        indexItem={indexItem && indexItem}
      />
    </li>
  );
}

LatestReleaesItem.propTypes = {
  videoTextEN: PropTypes.string.isRequired,
  videoTextUA: PropTypes.string.isRequired,
  songImage: PropTypes.object.isRequired,
  songLink: PropTypes.string.isRequired,
};

export default LatestReleaesItem;
