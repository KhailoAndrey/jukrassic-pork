import { useContext } from 'react';
import { LanguageContext } from 'utils/LanguageContext';
import { useTranslation } from 'react-i18next';
import useFetch from '../../hooks/useFetch';

import LatestReleasesChapter from './LatestReleasesChapter/LatestReleasesChapter';
import LatestReleasesText from './LatestReleasesText/LatestReleasesText';
import CommonButton from 'components/CommonButton/CommonButton';
import LatestReleasesPlayers from './LatestReleasesPlayers/LatestReleasesPlayers';

import scss from './LatestReleases.module.scss';

function LatestReleases() {
  const { data } = useFetch('releases');

  const { currentLanguage } = useContext(LanguageContext);
  const { t } = useTranslation();

  return (
    <section id="latest-releases" className={scss.latestReleases}>
      <div className="container">
        {data && <LatestReleasesChapter title={data.title[currentLanguage]} />}
        {data && (
          <LatestReleasesText description={data.description[currentLanguage]} />
        )}
        <div className={scss.boxButtonPlayers}>
          <CommonButton valueButton={t('go_to_all_releases')} />
          {data && (
            <LatestReleasesPlayers
              latestReleasesList={data.latestReleasesList}
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default LatestReleases;
