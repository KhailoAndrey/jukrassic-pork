// import { useSwipeable } from 'react-swipeable';
// import { useNavigate } from 'react-router-dom';

import Header from 'components/Header/Header';

import BannerStrip from 'components/BannerStrip/BannerStrip';
import BandMembers from 'components/BandMembers/BandMembers';
import LatestReleases from 'components/LatestReleases/LatestReleases';
import Video from 'components/Video/Video';

import Footer from 'components/Footer/Footer';

function HomePage() {
  // const navigate = useNavigate();

  // const handlers = useSwipeable({
  //   onSwipedLeft: () => {
  //     navigate('/music');
  //   },
  // });
  return (
    // <div {...handlers}>
    <>
      <Header />
      <BannerStrip />
      <BandMembers />
      <LatestReleases />
      <Video />
      <Footer />
    </>
    // </div>
  );
}

export default HomePage;
