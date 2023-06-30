import PropTypes from 'prop-types';
import scss from './ModalTextMusic.module.scss';

function ModalTextMusic({ textModalMusic }) {
  return (
    <div className={scss.boxTextModal}>
      <p className={scss.textModal}>{textModalMusic}</p>
    </div>
  );
}

ModalTextMusic.propTypes = {
  textModalMusic: PropTypes.string.isRequired,
};

export default ModalTextMusic;
