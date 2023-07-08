import PropTypes from 'prop-types';
import ListMusicItem from '../ListMusicItem/ListMusicItem';
import scss from './ListMusic.module.scss';

function ListMusic({ musicList }) {
  return (
    <ul className={scss.listMusic}>
      {musicList &&
        musicList.map(itemMusic => (
          <ListMusicItem itemMusic={itemMusic} key={itemMusic.id} />
        ))}
    </ul>
  );
}

ListMusic.propTypes = {
  musicList: PropTypes.array.isRequired,
};

export default ListMusic;
