import React, { useState } from 'react';
import { useContext } from 'react';
import { LanguageContext } from 'utils/LanguageContext';
import { useTranslation } from 'react-i18next';
import useFetch from '../../hooks/useFetch';

import HeaderMenu from '../../components/Header/HeaderContent/HeaderMenu';
import ChapterMusic from './ChapterMusic/ChapterMusic';
import TextMusic from './TextMusic/TextMusic';
import ListMusic from './ListMusic/ListMusic';
import ButtonShowMoreMusic from './ButtonShowMoreMusic/ButtonShowMoreMusic';
import Menu from 'components/Menu/Menu';

import scss from './MusicComponent.module.scss';

function MusicComponent() {
  const { data } = useFetch('music');

  const { currentLanguage } = useContext(LanguageContext);
  const { t } = useTranslation();

  const sliceList = 6;
  const [displayCount, setDisplayCount] = useState(sliceList);

  const handleShowMore = () => {
    setDisplayCount(prevCount => prevCount + sliceList);
  };

  const displaySongs = data?.musicList?.slice(0, displayCount) || [];

  return (
    <section className={scss.musicComponent}>
      <div className="container">
        <Menu />
        <div className={scss.headermenu}>
          <HeaderMenu page="Music" text={t('back_to_home')} />
        </div>
        {data?.title && (
          <ChapterMusic chapterMusic={data.title[currentLanguage]} />
        )}
        {data?.description && (
          <TextMusic textMusic={data.description[currentLanguage]} />
        )}
        {data?.musicList && <ListMusic musicList={displaySongs} />}
        {data?.musicList && (
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
