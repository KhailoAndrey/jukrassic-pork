// import PropTypes from 'prop-types';
import ListMusicItem from '../ListMusicItem/ListMusicItem';

import scss from './ListMusic.module.scss';

function ListMusic() {
  return (
    <ul className={scss.listMusic}>
      {/* {listMusic.map(item => (
        <ListMusicItem item={item} />
      ))} */}
      <ListMusicItem />
    </ul>
  );
}

// ListMusic.propTypes = {
//   listMusic: PropTypes.string.isRequired,
// };

export default ListMusic;
