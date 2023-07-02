import PropTypes from 'prop-types';
import scss from './ImageMusic.module.scss';

import MusicIconPlay from './MusicIconPlay/MusicIconPlay';
import ReactPlayer from 'react-player';

function ImageMusic({ imageMusic, imageAudio }) {
  return (
    <ReactPlayer
      className={scss.imageMusic}
      light={imageMusic}
      url={imageAudio}
      width="100%"
      height="340px"
      playIcon={<MusicIconPlay className={scss.icon} />}
    />
  );
}

ImageMusic.propTypes = {
  imageMusic: PropTypes.string.isRequired,
  imageAudio: PropTypes.string.isRequired,
};

export default ImageMusic;
