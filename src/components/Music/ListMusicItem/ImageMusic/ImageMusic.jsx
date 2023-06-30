import PropTypes from 'prop-types';
import scss from './ImageMusic.module.scss';

import MusicIconPlay from './MusicIconPlay/MusicIconPlay';
import ReactPlayer from 'react-player';

function ImageMusic({ imageMusic }) {
  return (
    <ReactPlayer
      className={scss.imageMusic}
      light={imageMusic}
      url="https://soundcloud.com/kristina-urbyt/rompasso-ignis-bass-boosted-pitch-000-tempo-90"
      width="100%"
      height="340px"
      playIcon={<MusicIconPlay className={scss.icon} />}
    />
  );
}

ImageMusic.propTypes = {
  imageMusic: PropTypes.string.isRequired,
};

export default ImageMusic;
