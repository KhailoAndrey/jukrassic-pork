import React from 'react';
import useFetch from '../../hooks/useFetch';
import { useContext } from 'react';

import ChapterMusic from './ChapterMusic/ChapterMusic';
import TextMusic from './TextMusic/TextMusic';
import ListMusic from './ListMusic/ListMusic';
import ButtonShowMoreMusic from './ButtonShowMoreMusic/ButtonShowMoreMusic';
import Menu from 'components/Menu/Menu';
import MusicMenu from './MusicMenu/MusicMenu';

import { useTranslation } from 'react-i18next';
import { LanguageContext } from 'utils/LanguageContext';
import scss from './MusicComponent.module.scss';

function MusicComponent() {
  const { data } = useFetch('music');

  const { currentLanguage } = useContext(LanguageContext);
  const { t } = useTranslation();

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
        {data?.musicList && <ListMusic musicList={data.musicList} />}
        {data && data.musicList.length >= 6 && (
          <ButtonShowMoreMusic valueShowMoreMusic={t('show_more_button')} />
        )}
      </div>
    </section>
  );
}

export default MusicComponent;
