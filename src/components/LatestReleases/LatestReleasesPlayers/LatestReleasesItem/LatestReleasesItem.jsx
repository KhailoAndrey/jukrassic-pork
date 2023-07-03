import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';

import LatestReleaesIconPlay from './LatestReleaesIconPlay/LatestReleaesIconPlay';
import LatestReleaesText from './LatestReleasesText/LatestReleasesText';
import LatestReleasesVideoSlider from './LatestReleasesVideoSlider/LatestReleasesVideoSlider';

import scss from './LatestReleasesItem.module.scss';

function LatestReleaesItem({ indexItem, songImage, songLink, videoText }) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(null);

  const handleVideoPlay = indexItem => {
    setCurrentVideoIndex(indexItem);
  };

  const handleVideoPause = () => {
    setCurrentVideoIndex(null);
  };

  return (
    <li className={scss.playerBox}>
      <ReactPlayer
        className={scss.reactPlayer}
        light={songImage}
        url={songLink}
        width="100%"
        height="100%"
        playIcon={
          <LatestReleaesIconPlay
            className={scss.icon}
            currentVideoIndex={currentVideoIndex}
            indexItem={indexItem && indexItem}
          />
        }
        playing={currentVideoIndex === indexItem}
        onPlay={() => handleVideoPlay(indexItem)}
        onPause={handleVideoPause}
      />
      <LatestReleaesText
        currentVideoIndex={currentVideoIndex}
        videoText={videoText}
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
  videoText: PropTypes.string.isRequired,
  songImage: PropTypes.object.isRequired,
  songLink: PropTypes.string.isRequired,
};

export default LatestReleaesItem;
