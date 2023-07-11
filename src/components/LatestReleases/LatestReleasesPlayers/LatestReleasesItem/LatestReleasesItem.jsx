import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';

import LatestReleaesIconPlay from './LatestReleaesIconPlay/LatestReleaesIconPlay';
import LatestReleaesText from './LatestReleasesText/LatestReleasesText';
import LatestReleasesVideoSlider from './LatestReleasesVideoSlider/LatestReleasesVideoSlider';

import scss from './LatestReleasesItem.module.scss';

function LatestReleaesItem({ songImage, songLink, videoText }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <li className={scss.playerBox}>
      <div
        className={`${scss.commonMusicWrapper} ${
          isPlaying ? null : scss.imageMusic
        }`}
      >
        <ReactPlayer
          light={songImage.url()}
          url={songLink}
          width="100%"
          height="100%"
          playIcon={<LatestReleaesIconPlay />}
          onClickPreview={handlePlay}
        />
      </div>
      <LatestReleaesText isPlaying={isPlaying} videoText={videoText} />
      <LatestReleasesVideoSlider isPlaying={isPlaying} />
    </li>
  );
}

LatestReleaesItem.propTypes = {
  videoText: PropTypes.string.isRequired,
  songImage: PropTypes.object.isRequired,
  songLink: PropTypes.string.isRequired,
};

export default LatestReleaesItem;
