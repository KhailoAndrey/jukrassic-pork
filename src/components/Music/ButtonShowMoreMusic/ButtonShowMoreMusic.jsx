import PropTypes from 'prop-types';
import scss from './ButtonShowMoreMusic.module.scss';

function ButtonShowMoreMusic({ valueShowMoreMusic }) {
  return (
    <div className={scss.boxShowMore}>
      <button className={scss.showMore}>{valueShowMoreMusic}</button>
    </div>
  );
}

ButtonShowMoreMusic.propTypes = {
  valueShowMoreMusic: PropTypes.string.isRequired,
  // onClick: PropTypes.func.isRequired,
};

export default ButtonShowMoreMusic;
