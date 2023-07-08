import React, { useState } from 'react';
import useFetch from '../../hooks/useFetch';
import { useContext } from 'react';

import ChapterMusic from './ChapterMusic/ChapterMusic';
import TextMusic from './TextMusic/TextMusic';
import ListMusic from './ListMusic/ListMusic';
import ButtonShowMoreMusic from './ButtonShowMoreMusic/ButtonShowMoreMusic';
import Menu from 'components/Menu/Menu';
import MusicMenu from './MusicMenu';

import { useTranslation } from 'react-i18next';
import { LanguageContext } from 'utils/LanguageContext';
import scss from './MusicComponent.module.scss';

function MusicComponent() {
  const { data } = useFetch('music');

  const { currentLanguage } = useContext(LanguageContext);
  const { t } = useTranslation();

  const [showMore, setShowMore] = useState(false);

  const handleShowMoreClick = () => {
    setShowMore(true);
  };

  let displayedMusicList = data?.musicList;

  if (!showMore) {
    displayedMusicList = displayedMusicList?.slice(0, 6);
  }

  return (
    <section className={scss.musicComponent}>
      <div className="container">
        <Menu />
        <div className={scss.headermenu}>
          <MusicMenu page="Music" text={t('back_to_home')} />
        </div>
        {data?.title && (
          <ChapterMusic chapterMusic={data.title[currentLanguage]} />
        )}
        {data?.description?.[currentLanguage] && (
          <TextMusic textMusic={data.description[currentLanguage]} />
        )}
        {displayedMusicList && <ListMusic musicList={displayedMusicList} />}
        {data && data.musicList.length > 6 && !showMore && (
          <ButtonShowMoreMusic
            valueShowMoreMusic={t('show_more_button')}
            onClick={handleShowMoreClick}
          />
        )}
      </div>
    </section>
  );
}

export default MusicComponent;
