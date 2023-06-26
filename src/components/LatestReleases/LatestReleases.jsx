// import ReactPlayer from 'react-player';

import LatestReleasesChapter from './LatestReleasesChapter/LatestReleasesChapter';
import scss from './LatestReleases.module.scss';

function LatestReleases() {
  return (
    <div className={scss.latestReleases}>
      <LatestReleasesChapter LRChapter="latest releases" />
    </div>
  );
}

export default LatestReleases;
