import PropTypes from 'prop-types';
import scss from './LatestReleasesText.module.scss';

function LatestReleaesText({ currentVideoIndex, videoText, indexItem }) {
  return (
    <p
      className={`${scss.textPlayer} ${
        currentVideoIndex === indexItem ? scss.hiddenText : ''
      }`}
    >
      {videoText}
    </p>
  );
}

LatestReleaesText.propTypes = {
  videoText: PropTypes.string.isRequired,
  currentVideoIndex: PropTypes.number,
  indexItem: PropTypes.string.isRequired,
};

export default LatestReleaesText;
