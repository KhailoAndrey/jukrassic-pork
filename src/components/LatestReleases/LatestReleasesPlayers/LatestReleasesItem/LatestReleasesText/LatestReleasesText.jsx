import PropTypes from 'prop-types';
import scss from './LatestReleasesText.module.scss';

function LatestReleaesText({ isPlaying, videoText }) {
  return !isPlaying ? <p className={scss.textPlayer}>{videoText}</p> : null;
}

LatestReleaesText.propTypes = {
  videoText: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
};

export default LatestReleaesText;
