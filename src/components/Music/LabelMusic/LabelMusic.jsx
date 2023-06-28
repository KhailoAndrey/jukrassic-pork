import PropTypes from 'prop-types';
import scss from './LabelMusic.module.scss';

function LabelMusic({ labelMusic }) {
  return <h1 className={scss.labelMusic}>{labelMusic}</h1>;
}

LabelMusic.propTypes = {
  labelMusic: PropTypes.string.isRequired,
};

export default LabelMusic;
