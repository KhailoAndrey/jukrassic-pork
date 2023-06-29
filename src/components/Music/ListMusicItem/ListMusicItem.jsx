// import PropTypes from 'prop-types';

import ImageMusic from './ImageMusic/ImageMusic';
import LabelMusic from './LabelMusic/LabelMusic';
import DateReleaseText from './DateReleaseText/DateReleaseText';
import ButtonDownloadMusic from './ButtonsMusic/Download/ButtonDownloadMusic';
import ButtonLyricsMusic from './ButtonsMusic/Lyrics/ButtonLyricsMusic';

import scss from './ListMusicItem.module.scss';
import imageMusic from '../../../images/Music/jpg/IMG.jpg';

function ListMusicItem() {
  return (
    <>
      <li className={scss.listMusicItem}>
        <ImageMusic imageMusic={imageMusic} />
        <LabelMusic labelMusic="сонце/sun" />
        <DateReleaseText dateReleaseText="Release date: June 2023" />
        <ul className={scss.listButtonsMusic}>
          <li>
            <ButtonDownloadMusic valueButton="Download" />
          </li>
          <li>
            <ButtonLyricsMusic valueButton="Lyrics" />
          </li>
        </ul>
      </li>
      <li className={scss.listMusicItem}>
        <ImageMusic imageMusic={imageMusic} />
        <LabelMusic labelMusic="сонце/sun" />
        <DateReleaseText dateReleaseText="Release date: June 2023" />
        <ul className={scss.listButtonsMusic}>
          <li>
            <ButtonDownloadMusic valueButton="Download" />
          </li>
          <li>
            <ButtonLyricsMusic valueButton="Lyrics" />
          </li>
        </ul>
      </li>
      <li className={scss.listMusicItem}>
        <ImageMusic imageMusic={imageMusic} />
        <LabelMusic labelMusic="сонце/sun" />
        <DateReleaseText dateReleaseText="Release date: June 2023" />
        <ul className={scss.listButtonsMusic}>
          <li>
            <ButtonDownloadMusic valueButton="Download" />
          </li>
          <li>
            <ButtonLyricsMusic valueButton="Lyrics" />
          </li>
        </ul>
      </li>
      <li className={scss.listMusicItem}>
        <ImageMusic imageMusic={imageMusic} />
        <LabelMusic labelMusic="сонце/sun" />
        <DateReleaseText dateReleaseText="Release date: June 2023" />
        <ul className={scss.listButtonsMusic}>
          <li>
            <ButtonDownloadMusic valueButton="Download" />
          </li>
          <li>
            <ButtonLyricsMusic valueButton="Lyrics" />
          </li>
        </ul>
      </li>
    </>
  );
}

// ListMusicItem.propTypes = {
//   listMusicItem: PropTypes.string.isRequired,
// };

export default ListMusicItem;
