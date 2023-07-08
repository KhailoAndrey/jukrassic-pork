import React, { useState } from 'react';
import { useContext } from 'react';
import { LanguageContext } from 'utils/LanguageContext';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

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

  const { songDownloadLink, songImage, songLink, name, description, lyrics } =
    itemMusic;

  const { currentLanguage } = useContext(LanguageContext);
  const { t } = useTranslation();

  return (
    <>
      {itemMusic && (
        <li className={scss.listMusicItem}>
          <ImageMusic
            songImage={itemMusic?.songImage && songImage}
            songLink={itemMusic?.songLink && songLink}
          />
          <LabelMusic
            labelMusicEn={itemMusic?.name ? name.en : 'Label'}
            labelMusicUa={itemMusic?.name ? name.ua : 'Назва'}
          />
          <DateReleaseText
            dateReleaseText={
              itemMusic?.description
                ? description[currentLanguage]
                : t('without_release_date')
            }
          />
          <ul className={scss.listButtonsMusic}>
            <li>
              <ButtonDownloadMusic
                valueButton={t('download')}
                songDownloadLink={songDownloadLink}
              />
            </li>
            <li>
              <ButtonLyricsMusic
                valueButton={t('lyrics')}
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
              <ModalLabelMusic
                modalName={
                  itemMusic?.name ? name[currentLanguage] : t('default-label')
                }
              />
              <ModalTextMusic
                textModalMusic={itemMusic?.lyrics ? lyrics : t('empty-lyrics')}
              />
              <ButtonModalCopy
                valueButton="Copy"
                textToCopy={itemMusic?.lyrics ? lyrics : t('copy-button')}
              />
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
