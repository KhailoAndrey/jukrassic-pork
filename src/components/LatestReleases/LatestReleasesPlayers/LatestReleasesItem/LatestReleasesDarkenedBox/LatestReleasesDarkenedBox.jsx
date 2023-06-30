import PropTypes from 'prop-types';
import scss from '../LatestReleasesItem.module.scss';

function LatestReleasesDarkenedBox({ currentVideoIndex, index }) {
  return (
    <div
      className={`${scss.darknedBox} ${
        currentVideoIndex === index ? scss.hidden : ''
      }`}
    ></div>
  );
}

LatestReleasesDarkenedBox.propTypes = {
  currentVideoIndex: PropTypes.number,
  index: PropTypes.number.isRequired,
};

export default LatestReleasesDarkenedBox;
