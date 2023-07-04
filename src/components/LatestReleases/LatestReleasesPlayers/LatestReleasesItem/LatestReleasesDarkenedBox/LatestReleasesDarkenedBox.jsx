import PropTypes from 'prop-types';
import scss from '../LatestReleasesItem.module.scss';

function LatestReleasesDarkenedBox({ currentVideoIndex, indexItem }) {
  return (
    <div
      className={`${scss.darknedBox} ${
        currentVideoIndex === indexItem ? scss.hidden : ''
      }`}
    ></div>
  );
}

LatestReleasesDarkenedBox.propTypes = {
  currentVideoIndex: PropTypes.number,
  indexItem: PropTypes.number.isRequired,
};

export default LatestReleasesDarkenedBox;
