import PropTypes from 'prop-types';

import scss from './LatestReleasesText.module.scss';

function LatestReleasesText({ LRText }) {
  return <p className={scss.LRText}>{LRText}</p>;
}

LatestReleasesText.propTypes = {
  LRChapter: PropTypes.string.isRequired,
};

export default LatestReleasesText;
