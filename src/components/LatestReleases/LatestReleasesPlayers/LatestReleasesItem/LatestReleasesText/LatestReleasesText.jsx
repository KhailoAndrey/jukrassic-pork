import PropTypes from 'prop-types';
import scss from './LatestReleasesText.module.scss';

function LatestReleaesText({ currentVideoIndex, valueText, index }) {
  return (
    <p
      className={`${scss.textPlayer} ${
        currentVideoIndex === index ? scss.hiddenText : ''
      }`}
    >
      {valueText}
    </p>
  );
}

LatestReleaesText.propTypes = {
  valueText: PropTypes.string.isRequired,
  currentVideoIndex: PropTypes.number,
  index: PropTypes.number.isRequired,
};

export default LatestReleaesText;
