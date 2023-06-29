import LatestReleasesChapter from './LatestReleasesChapter/LatestReleasesChapter';
import LatestReleasesText from './LatestReleasesText/LatestReleasesText';
import LatestReleasesButton from './LatestReleasesButton/LatestReleasesButton';
import LatestReleasesPlayers from './LatestReleasesPlayers/LatestReleasesPlayers';

import scss from './LatestReleases.module.scss';

function LatestReleases() {
  const LRText =
    'The war, like a black muse, inspired many people to create works of various genres. Our music project Jukrassic Pork invited Maria Ivchenko, a very talented child, whose bright vocals combined with an amazing arrangement in the genres of «OST» and «Tanzmetal» by Dmitry Khizhnyak and allowed us to create the song «Стежка». If you want to listen to the full versions of the tracks, download lyrics, you can press the button below and go to the music page.';
  const valueButton = 'Go to all releases';
  return (
    <section id="latest-releases" className={scss.latestReleases}>
      <div className="container">
        <div className={scss.boxChapterText}>
          <LatestReleasesChapter LRChapter="latest releases" />
          <LatestReleasesText LRText={LRText} />
        </div>
        <div className={scss.boxButtonPlayers}>
          <LatestReleasesButton valueButton={valueButton} />
          <LatestReleasesPlayers />
        </div>
      </div>
    </section>
  );
}

export default LatestReleases;
