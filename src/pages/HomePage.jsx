import Main from 'components/Header/Main';
import BandMembers from 'components/BandMembers/BandMembers';
import LatestReleases from 'components/LatestReleases/LatestReleases';
import Video from 'components/Video/Video';
import Footer from 'components/Footer/Footer';

function HomePage() {
  return (
    <>
      <Main />
      <BandMembers />
      <LatestReleases />
      <Video />
      <Footer />
    </>
  );
}

export default HomePage;
