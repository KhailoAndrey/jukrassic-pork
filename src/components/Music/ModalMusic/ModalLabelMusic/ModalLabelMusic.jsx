import PropTypes from 'prop-types';
import scss from './ModalLabelMusic.module.scss';

function ModalLabelMusic({ labelModalMusic }) {
  return (
    <div className={scss.boxLabelModalMusic}>
      <h2 className={scss.labelModalMusic}>{labelModalMusic}</h2>
    </div>
  );
}

ModalLabelMusic.propTypes = {
  labelModalMusic: PropTypes.string.isRequired,
};

export default ModalLabelMusic;
