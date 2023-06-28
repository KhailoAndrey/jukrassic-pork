import PropTypes from 'prop-types';
import scss from './ImageMusic.module.scss';

function ImageMusic({ imageMusic }) {
  return <img src={imageMusic} className={scss.imageMusic} alt="imageMusic" />;
}

ImageMusic.propTypes = {
  imageMusic: PropTypes.string.isRequired,
};

export default ImageMusic;
