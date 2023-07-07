import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import scss from './LatestReleasesText.module.scss';

function LatestReleasesText({ description }) {
  const { t } = useTranslation();

  return (
    <div className={scss.boxLatestReleasesText}>
      <p className={scss.latestReleasesText}>{description}</p>
      <p className={scss.latestReleasesTextStatic}>
        {t('static_text_releases')}
      </p>
    </div>
  );
}

LatestReleasesText.propTypes = {
  description: PropTypes.string.isRequired,
};

export default LatestReleasesText;
