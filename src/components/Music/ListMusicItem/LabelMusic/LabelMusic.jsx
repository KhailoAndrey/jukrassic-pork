import PropTypes from 'prop-types';
import scss from './LabelMusic.module.scss';

function LabelMusic({ labelMusicEn, labelMusicUa }) {
  return (
    <h2 className={scss.labelMusic}>
      {labelMusicUa}/{labelMusicEn}
    </h2>
  );
}

LabelMusic.propTypes = {
  labelMusicEn: PropTypes.string.isRequired,
  labelMusicUa: PropTypes.string.isRequired,
};

export default LabelMusic;
