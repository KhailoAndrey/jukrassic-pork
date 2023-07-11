import PropTypes from 'prop-types';
import scss from '../LatestReleasesItem.module.scss';

function LatestReleasesVideoSlider({ isPlaying }) {
  return !isPlaying ? <div className={scss.videoSlider} /> : null;
}

LatestReleasesVideoSlider.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
};

export default LatestReleasesVideoSlider;
