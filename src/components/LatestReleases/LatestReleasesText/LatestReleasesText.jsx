import PropTypes from 'prop-types';

import scss from './LatestReleasesText.module.scss';

function LatestReleasesText({ description }) {
  return <p className={scss.latestReleasesText}>{description}</p>;
}

LatestReleasesText.propTypes = {
  description: PropTypes.string.isRequired,
};

export default LatestReleasesText;
