import PropTypes from 'prop-types';
import scss from '../LatestReleasesItem.module.scss';

function LatestReleasesVideoSlider({ currentVideoIndex, indexItem }) {
  return (
    <div
      className={`${scss.videoSlider} ${
        currentVideoIndex === indexItem ? scss.hidden : ''
      }`}
    ></div>
  );
}

LatestReleasesVideoSlider.propTypes = {
  currentVideoIndex: PropTypes.number,
  indexItem: PropTypes.string.isRequired,
};

export default LatestReleasesVideoSlider;
