import PropTypes from 'prop-types';
import scss from './ImageMusic.module.scss';

import MusicIconPlay from './MusicIconPlay/MusicIconPlay';
import ReactPlayer from 'react-player';

function ImageMusic({ songImage, songLink }) {
  return (
    <ReactPlayer
      className={scss.imageMusic}
      light={songImage}
      url={songLink}
      width="100%"
      height="340px"
      playIcon={<MusicIconPlay className={scss.icon} />}
    />
  );
}

ImageMusic.propTypes = {
  songImage: PropTypes.object.isRequired,
  songLink: PropTypes.string.isRequired,
};

export default ImageMusic;
