import PropTypes from 'prop-types';
import scss from './ModalTextMusic.module.scss';

function ModalTextMusic({ textModalMusic }) {
  return <p className={scss.textModal}>{textModalMusic}</p>;
}

ModalTextMusic.propTypes = {
  textModalMusic: PropTypes.string.isRequired,
};

export default ModalTextMusic;
