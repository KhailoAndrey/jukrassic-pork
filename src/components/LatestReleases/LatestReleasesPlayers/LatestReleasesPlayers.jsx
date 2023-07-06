import LatestReleaesItem from './LatestReleasesItem/LatestReleasesItem';
import scss from './LatestReleasesPlayers.module.scss';

function LatestReleasesPlayers({ latestReleasesList }) {
  return (
    <ul className={scss.listPlayers}>
      {latestReleasesList &&
        latestReleasesList.map(release => (
          <LatestReleaesItem
            key={release.id}
            indexItem={release.id}
            songImage={release.songImage}
            songLink={release.songLink}
            videoTextEN={release.name.en}
            videoTextUA={release.name.ua}
          />
        ))}
    </ul>
  );
}

export default LatestReleasesPlayers;
