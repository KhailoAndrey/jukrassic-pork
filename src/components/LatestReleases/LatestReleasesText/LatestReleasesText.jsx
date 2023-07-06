import PropTypes from 'prop-types';

import scss from './LatestReleasesText.module.scss';

function LatestReleasesText({ description }) {
  return (
    <div className={scss.boxLatestReleasesText}>
      <p className={scss.latestReleasesText}>{description}</p>
      <p className={scss.latestReleasesTextStatic}>
        If you want to listen to the full versions of the tracks, download
        lyrics, you can press the button below and go to the music page.
      </p>
    </div>
  );
}

LatestReleasesText.propTypes = {
  description: PropTypes.string.isRequired,
};

export default LatestReleasesText;
