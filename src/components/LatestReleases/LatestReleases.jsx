import { useContext } from 'react';
import { LanguageContext } from 'utils/LanguageContext';
import useFetch from '../../hooks/useFetch';

import LatestReleasesChapter from './LatestReleasesChapter/LatestReleasesChapter';
import LatestReleasesText from './LatestReleasesText/LatestReleasesText';
import LatestReleasesButton from './LatestReleasesButton/LatestReleasesButton';
import LatestReleasesPlayers from './LatestReleasesPlayers/LatestReleasesPlayers';

import scss from './LatestReleases.module.scss';

function LatestReleases() {
  const { data } = useFetch('releases');
  const { currentLanguage } = useContext(LanguageContext);

  console.log(data);
  return (
    <section id="latest-releases" className={scss.latestReleases}>
      <div className="container">
        <div className={scss.boxChapterText}>
          {data && (
            <LatestReleasesChapter title={data.title[currentLanguage]} />
          )}
          {data && (
            <LatestReleasesText
              description={data.description[currentLanguage]}
            />
          )}
        </div>
        <div className={scss.boxButtonPlayers}>
          <LatestReleasesButton valueButton="Go to all releases" />
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
