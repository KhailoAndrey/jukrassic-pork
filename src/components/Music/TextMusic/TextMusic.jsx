import PropTypes from 'prop-types';
import scss from './TextMusic.module.scss';

function TextMusic({ textMusic }) {
  return <p className={scss.textMusic}>{textMusic}</p>;
}

TextMusic.propTypes = {
  textMusic: PropTypes.string.isRequired,
};

export default TextMusic;
