import PropTypes from 'prop-types';

import scss from './LatestReleasesChapter.module.scss';

function LatestReleasesChapter({ LRChapter }) {
  return <h2 className={scss.LRChapter}>{LRChapter}</h2>;
}

LatestReleasesChapter.propTypes = {
  LRChapter: PropTypes.string.isRequired,
};

export default LatestReleasesChapter;
