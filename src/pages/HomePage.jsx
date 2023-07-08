import Header from 'components/Header/Header';
import BannerStrip from 'components/BannerStrip/BannerStrip';
import BandMembers from 'components/BandMembers/BandMembers';
import LatestReleases from 'components/LatestReleases/LatestReleases';
import Video from 'components/Video/Video';
import Footer from 'components/Footer/Footer';

function HomePage() {
  return (
    <>
      <Header />
      <BannerStrip />
      <BandMembers />
      <LatestReleases />
      <Video />
      <Footer />
    </>
  );
}

export default HomePage;
