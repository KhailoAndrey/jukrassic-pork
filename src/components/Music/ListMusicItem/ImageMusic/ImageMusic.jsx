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

  return (
    <div
      className={`${scss.commonMusicWrapper} ${
        isPlaying ? null : scss.imageMusic
      }`}
    >
      <ReactPlayer
        light={songImage.url()}
        url={songLink}
        width="100%"
        playIcon={<MusicIconPlay className={scss.iconPlayMusic} />}
        onClickPreview={handlePlay}
      />
    </div>
  );
}

ImageMusic.propTypes = {
  songImage: PropTypes.object.isRequired,
  songLink: PropTypes.string.isRequired,
};

export default ImageMusic;
