import PropTypes from 'prop-types';
import scss from '../LatestReleasesItem.module.scss';

function LatestReleasesVideoSlider({ currentVideoIndex, index }) {
  return (
    <div
      className={`${scss.videoSlider} ${
        currentVideoIndex === index ? scss.hidden : ''
      }`}
    ></div>
  );
}

LatestReleasesVideoSlider.propTypes = {
  currentVideoIndex: PropTypes.number,
  index: PropTypes.number.isRequired,
};

export default LatestReleasesVideoSlider;
