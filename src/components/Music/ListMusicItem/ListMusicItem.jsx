import React, { useState } from 'react';
// import PropTypes from 'prop-types';

import ImageMusic from './ImageMusic/ImageMusic';
import LabelMusic from './LabelMusic/LabelMusic';
import DateReleaseText from './DateReleaseText/DateReleaseText';
import ButtonDownloadMusic from './ButtonsMusic/Download/ButtonDownloadMusic';
import ButtonLyricsMusic from './ButtonsMusic/Lyrics/ButtonLyricsMusic';

import ModalMusic from '../ModalMusic/ModalMusic';
import ButtonModalCopy from './ButtonsMusic/ButtonModalCopy/ButtonModalCopy';

import scss from './ListMusicItem.module.scss';
import imageMusic from '../../../images/Music/jpg/IMG.jpg';

function ListMusicItem() {
  const [showModal, setShowModal] = useState(false);

  const toggleModalMusic = () => {
    setShowModal(prevState => !prevState);
  };

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
            <ButtonLyricsMusic
              valueButton="Lyrics"
              onClick={toggleModalMusic}
            />
          </li>
        </ul>
      </li>
      {showModal && (
        <ModalMusic
          onCloseModal={toggleModalMusic}
          modalContent={
            <>
              <h2>КВІТИ ПОЛЬОВІЇ</h2>
              <p>
                Навіщо стільки спроб Завоювати світ? Мов птаха гнати сонце З
                заходу на схід Всі твої зусилля
              </p>
              <ButtonModalCopy valueButton="Copy" />
            </>
          }
        ></ModalMusic>
      )}
    </>
  );
}

// ListMusicItem.propTypes = {
//   listMusicItem: PropTypes.string.isRequired,
// };

export default ListMusicItem;
