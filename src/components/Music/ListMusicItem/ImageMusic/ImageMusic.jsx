import ReactPlayer from 'react-player';
import PropTypes from 'prop-types';
import MusicIconPlay from './MusicIconPlay/MusicIconPlay';
import scss from './ImageMusic.module.scss';

function ImageMusic({ songImage, songLink }) {
  return (
    <ReactPlayer
      className={scss.imageMusic}
      light={songImage.url()}
      url={songLink}
      width="100%"
      height="340px"
      playIcon={<MusicIconPlay className={scss.iconPlayMusic} />}
    />
  );
}

ImageMusic.propTypes = {
  songImage: PropTypes.object.isRequired,
  songLink: PropTypes.string.isRequired,
};

export default ImageMusic;
