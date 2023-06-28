// import PropTypes from 'prop-types';
import scss from './ListMusicItem.module.scss';

// import imageMusic from '../../../images/Music/jpg/IMG.jpg';

function ListMusicItem() {
  return (
    <li className={scss.listMusicItem}>
      {/* <img
        src={imageMusic}
        alt="music-image"
        width="300"
        height="400"
        className={scss.imageMusic}
      /> */}
      <h2>сонце/sun</h2>
      <p>Release date: June 2023</p>
      <button>Download</button>
      <button>Lyrics</button>
    </li>
  );
}

// ListMusicItem.propTypes = {
//   listMusicItem: PropTypes.string.isRequired,
// };

export default ListMusicItem;
