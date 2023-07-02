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

  const { audio, songImage, name, description, lyrics } = itemMusic;

  const {
    options: {
      source: { _ref },
    },
  } = songImage;

  const { currentLanguage } = useContext(LanguageContext);

  return (
    <>
      <li className={scss.listMusicItem}>
        {itemMusic && _ref && (
          <ImageMusic imageAudio={audio} imageMusic={_ref} />
        )}
        {itemMusic && <LabelMusic labelMusic={name[currentLanguage]} />}
        {itemMusic && itemMusic.description && (
          <DateReleaseText dateReleaseText={description[currentLanguage]} />
        )}
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
              {itemMusic && itemMusic.name && (
                <ModalLabelMusic
                  labelModalMusic={itemMusic.name[currentLanguage]}
                />
              )}
              {itemMusic && lyrics && (
                <ModalTextMusic textModalMusic={lyrics} />
              )}
              <ButtonModalCopy valueButton="Copy" textToCopy={lyrics} />
            </>
          }
        />
      )}
    </>
  );
}

ListMusicItem.propTypes = {
  itemMusic: PropTypes.shape({
    audio: PropTypes.string.isRequired,
    name: PropTypes.shape({
      en: PropTypes.string.isRequired,
      ua: PropTypes.string.isRequired,
    }),
    description: PropTypes.shape({
      en: PropTypes.string.isRequired,
      ua: PropTypes.string.isRequired,
    }),
    songImage: PropTypes.shape({
      options: PropTypes.shape({
        source: PropTypes.shape({
          _ref: PropTypes.string.isRequired,
        }),
      }),
    }),
    lyrics: PropTypes.string.isRequired,
  }).isRequired,
};

export default ListMusicItem;
