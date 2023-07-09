import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types';
import MusicIconPlay from './MusicIconPlay/MusicIconPlay';
import scss from './ImageMusic.module.scss';

function ImageMusic({ songImage, songLink }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  return (
    <ReactPlayer
      className={
        isPlaying ? `${scss.imageMusic} ${scss.noHover}` : scss.imageMusic
      }
      light={songImage.url()}
      url={songLink}
      width="100%"
      height="340px"
      playIcon={<MusicIconPlay className={scss.iconPlayMusic} />}
      onPlay={handlePlay}
      onPause={handlePause}
    />
  );
}

ImageMusic.propTypes = {
  songImage: PropTypes.object.isRequired,
  songLink: PropTypes.string.isRequired,
};

export default ImageMusic;
