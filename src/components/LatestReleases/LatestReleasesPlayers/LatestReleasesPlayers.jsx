import { useContext } from 'react';
import { LanguageContext } from 'utils/LanguageContext';

import LatestReleaesItem from './LatestReleasesItem/LatestReleasesItem';
import scss from './LatestReleasesPlayers.module.scss';

function LatestReleasesPlayers({ latestReleasesList }) {
  const { currentLanguage } = useContext(LanguageContext);

  return (
    <ul className={scss.listPlayers}>
      {latestReleasesList &&
        latestReleasesList.map(release => (
          <LatestReleaesItem
            key={release.id}
            indexItem={release.id}
            songImage={release.songImage}
            songLink={release.songLink}
            videoText={release.name[currentLanguage]}
          />
        ))}
    </ul>
  );
}

export default LatestReleasesPlayers;
