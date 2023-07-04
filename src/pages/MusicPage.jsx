import { useSwipeable } from 'react-swipeable';
import { useNavigate } from 'react-router-dom';

import MusicComponent from 'components/Music/MusicComponent';
import Footer from 'components/Footer/Footer';

function MusicPage() {
  
  const navigate = useNavigate();

  const handlers = useSwipeable({
    onSwipedRight: () => {
      navigate('/');
    },
  });


  return (
      <div {...handlers}>
        <MusicComponent />
        <Footer />
      </div>
  );
}

export default MusicPage;
