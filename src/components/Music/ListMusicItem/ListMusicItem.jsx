import React, { useState } from 'react';
// import PropTypes from 'prop-types';

import ImageMusic from './ImageMusic/ImageMusic';
import LabelMusic from './LabelMusic/LabelMusic';
import DateReleaseText from './DateReleaseText/DateReleaseText';
import ButtonDownloadMusic from './ButtonsMusic/Download/ButtonDownloadMusic';
import ButtonLyricsMusic from './ButtonsMusic/Lyrics/ButtonLyricsMusic';

import ModalMusic from '../ModalMusic/ModalMusic';
import ModalLabelMusic from '../ModalMusic/ModalLabelMusic/ModalLabelMusic';
import ModalTextMusic from '../ModalMusic/ModalTextMusic/ModalTextMusic';
import ButtonModalCopy from '../ModalMusic/ButtonModalCopy/ButtonModalCopy';

import scss from './ListMusicItem.module.scss';
import imageMusic from '../../../images/Music/jpg/IMG.jpg';

function ListMusicItem() {
  const [showModal, setShowModal] = useState(false);

  const toggleModalMusic = () => {
    setShowModal(prevState => !prevState);
  };

  const textModalMusic =
    ' Багато кроків ти пройшов З надією І втілив у життя усе Омріяне Я долі буду Дякувать завжди Що вдачу мала я Тебе знайти. Завжди тримав За муром Думки і надії Ти не ховай від сонця Квіти польовії Багато кроків ти пройшов З надією І втілив у життя усе Омріяне Я долі буду Дякувать завжди Що вдачу мала я Тебе знайти. Завжди тримав За муром Думки і надії Ти не ховай від сонця Квіти польовії';

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
              <ModalLabelMusic labelModalMusic="КВІТИ ПОЛЬОВІЇ" />
              <ModalTextMusic textModalMusic={textModalMusic} />
              <ButtonModalCopy valueButton="Copy" textToCopy={textModalMusic} />
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
