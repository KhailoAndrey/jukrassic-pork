import PropTypes from 'prop-types';
import scss from './ModalLabelMusic.module.scss';

function ModalLabelMusic({ modalName }) {
  return (
    <div className={scss.boxLabelModalMusic}>
      <h2 className={scss.labelModalMusic}>{modalName}</h2>
    </div>
  );
}

ModalLabelMusic.propTypes = {
  modalName: PropTypes.string.isRequired,
};

export default ModalLabelMusic;
