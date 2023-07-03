import PropTypes from 'prop-types';
import scss from './ButtonShowMoreMusic.module.scss';

function ButtonShowMoreMusic({ valueShowMoreMusic, onClick }) {
  return (
    <button className={scss.showMore} onClick={onClick}>
      {valueShowMoreMusic}
    </button>
  );
}

ButtonShowMoreMusic.propTypes = {
  valueShowMoreMusic: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ButtonShowMoreMusic;
