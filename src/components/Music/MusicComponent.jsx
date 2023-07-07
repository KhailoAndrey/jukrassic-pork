import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import { LanguageContext } from 'utils/LanguageContext';
import { useTranslation } from 'react-i18next';
import useFetch from '../../hooks/useFetch';

// import HeaderMenu from '../../components/Header/HeaderContent/HeaderMenu';
import ChapterMusic from './ChapterMusic/ChapterMusic';
import TextMusic from './TextMusic/TextMusic';
import ListMusic from './ListMusic/ListMusic';
import ButtonShowMoreMusic from './ButtonShowMoreMusic/ButtonShowMoreMusic';
import Menu from 'components/Menu/Menu';

import scss from './MusicComponent.module.scss';
import BackButton from '../CommonButton/BackButton';

function MusicComponent() {
  const { data } = useFetch('music');

  const { currentLanguage } = useContext(LanguageContext);
  const { t } = useTranslation();

  const [songs, setSongs] = useState([]);
  const [showMoreCount, setShowMoreCount] = useState(6);

  useEffect(() => {
    if (data?.musicList) {
      setSongs(data.musicList);
    }
  }, [data]);

  const handleShowMore = () => {
    setShowMoreCount(prevCount => prevCount + 6);
  };

  return (
    <section className={scss.musicComponent}>
      <div className="container">
        <Menu />
        <div className={scss.headermenu}>
        <BackButton valueButton={t('back_to_home')} />
          {/* <HeaderMenu page="Music" text={t('back_to_home')} /> */}
        </div>
        {data?.title && (
          <ChapterMusic chapterMusic={data.title[currentLanguage]} />
        )}
        {data?.description?.[currentLanguage] && (
          <TextMusic textMusic={data.description[currentLanguage]} />
        )}
        {/* {data?.musicList && <ListMusic musicList={data.musicList} />}
        {data && (
          <ButtonShowMoreMusic valueShowMoreMusic={t('show_more_button')} />
        )} */}
        {songs.length > 0 && (
          <ListMusic
            musicList={songs.slice(0, Math.min(showMoreCount, songs.length))}
          />
        )}
        {songs.length > showMoreCount && (
          <ButtonShowMoreMusic
            valueShowMoreMusic={t('show_more_button')}
            onClick={handleShowMore}
          />
        )}
      </div>
    </section>
  );
}

export default MusicComponent;
