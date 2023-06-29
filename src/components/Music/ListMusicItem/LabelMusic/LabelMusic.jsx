import PropTypes from 'prop-types';
import scss from './LabelMusic.module.scss';

function LabelMusic({ labelMusic }) {
  return <h2 className={scss.labelMusic}>{labelMusic}</h2>;
}

LabelMusic.propTypes = {
  labelMusic: PropTypes.string.isRequired,
};

export default LabelMusic;
