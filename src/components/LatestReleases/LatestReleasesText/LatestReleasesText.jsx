import PropTypes from 'prop-types';

import scss from './LatestReleasesText.module.scss';

function LatestReleasesText({ LRText }) {
  return <p className={scss.latestReleasesText}>{LRText}</p>;
}

LatestReleasesText.propTypes = {
  LRText: PropTypes.string.isRequired,
};

export default LatestReleasesText;
