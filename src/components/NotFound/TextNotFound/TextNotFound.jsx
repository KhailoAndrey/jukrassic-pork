import PropTypes from 'prop-types';
import scss from './TextNotFound.module.scss';

function TextNotFound({ textNotFound }) {
  return <p className={scss.textNotFound}>{textNotFound}</p>;
}

TextNotFound.propTypes = {
  textNotFound: PropTypes.string.isRequired,
};

export default TextNotFound;
