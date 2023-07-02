import React, { useState } from 'react';
import { useContext } from 'react';
import { LanguageContext } from 'utils/LanguageContext';
import PropTypes from 'prop-types';

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

function ListMusicItem({ itemMusic }) {
  const [showModal, setShowModal] = useState(false);

  const toggleModalMusic = () => {
    setShowModal(prevState => !prevState);
  };

  const { audio, songImage, songLink, name, description, lyrics } = itemMusic;

  const { currentLanguage } = useContext(LanguageContext);

  return (
    <>
      {itemMusic.audio && (
        <li className={scss.listMusicItem}>
          {itemMusic && (
            <ImageMusic songImage={songImage} songLink={songLink} />
          )}
          {itemMusic[currentLanguage] ? (
            <LabelMusic labelMusic={name[currentLanguage]} />
          ) : (
            <LabelMusic labelMusic="without title" />
          )}
          {itemMusic && itemMusic.description ? (
            <DateReleaseText dateReleaseText={description[currentLanguage]} />
          ) : (
            <DateReleaseText dateReleaseText="Without release date" />
          )}
          <ul className={scss.listButtonsMusic}>
            <li>
              <ButtonDownloadMusic valueButton="Download" audio={audio} />
            </li>
            <li>
              <ButtonLyricsMusic
                valueButton="Lyrics"
                onClick={toggleModalMusic}
              />
            </li>
          </ul>
        </li>
      )}
      {showModal && (
        <ModalMusic
          onCloseModal={toggleModalMusic}
          modalContent={
            <>
              {itemMusic && itemMusic.name && (
                <ModalLabelMusic modalName={itemMusic.name[currentLanguage]} />
              )}
              {itemMusic && lyrics ? (
                <ModalTextMusic textModalMusic={lyrics} />
              ) : (
                <ModalTextMusic textModalMusic="This song hasn't lyrics(" />
              )}
              {itemMusic && lyrics ? (
                <ButtonModalCopy valueButton="Copy" textToCopy={lyrics} />
              ) : (
                <ButtonModalCopy
                  valueButton="Copy"
                  textModalMusic="This song hasn't lyrics("
                />
              )}
            </>
          }
        />
      )}
    </>
  );
}

ListMusicItem.propTypes = {
  itemMusic: PropTypes.object.isRequired,
};

export default ListMusicItem;
