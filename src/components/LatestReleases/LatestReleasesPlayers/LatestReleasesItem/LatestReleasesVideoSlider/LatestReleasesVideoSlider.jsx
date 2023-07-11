import PropTypes from 'prop-types';
import scss from '../LatestReleasesItem.module.scss';

function LatestReleasesVideoSlider({ isPlaying }) {
  return !isPlaying ? <div className={scss.videoSlider} /> : null;
}

LatestReleasesVideoSlider.propTypes = {
  currentVideoIndex: PropTypes.number,
  indexItem: PropTypes.string.isRequired,
};

export default LatestReleasesVideoSlider;
