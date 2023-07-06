import PropTypes from 'prop-types';
import scss from './LatestReleasesText.module.scss';

function LatestReleaesText({
  currentVideoIndex,
  videoTextEN,
  videoTextUA,
  indexItem,
}) {
  return (
    <p
      className={`${scss.textPlayer} ${
        currentVideoIndex === indexItem ? scss.hiddenText : ''
      }`}
    >
      {videoTextUA}/{videoTextEN}
    </p>
  );
}

LatestReleaesText.propTypes = {
  videoTextEN: PropTypes.string.isRequired,
  videoTextUA: PropTypes.string.isRequired,
  currentVideoIndex: PropTypes.number,
  indexItem: PropTypes.string.isRequired,
};

export default LatestReleaesText;
