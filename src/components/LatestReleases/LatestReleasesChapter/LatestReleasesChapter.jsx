import PropTypes from 'prop-types';

import scss from './LatestReleasesChapter.module.scss';

function LatestReleasesChapter({ title }) {
  return <h2 className={scss.latestReleasesChapter}>{title}</h2>;
}

LatestReleasesChapter.propTypes = {
  title: PropTypes.string.isRequired,
};

export default LatestReleasesChapter;
