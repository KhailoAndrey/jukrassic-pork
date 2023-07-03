import { useContext } from 'react';
import { LanguageContext } from 'utils/LanguageContext';
import useFetch from '../../hooks/useFetch';

import HeaderMenu from '../../components/Header/HeaderContent/HeaderMenu';
import ChapterMusic from './ChapterMusic/ChapterMusic';
import TextMusic from './TextMusic/TextMusic';
import ListMusic from './ListMusic/ListMusic';
import ButtonShowMoreMusic from './ButtonShowMoreMusic/ButtonShowMoreMusic';

import scss from './MusicComponent.module.scss';

function MusicComponent() {
  const { data } = useFetch('music');
  const { currentLanguage } = useContext(LanguageContext);

  return (
    <section className={scss.musicComponent}>
      <div className="container">
        <HeaderMenu page="Music" text="Back to Home" />
        <div className={scss.boxChapterText}>
          {data && data.title[currentLanguage] && (
            <ChapterMusic chapterMusic={data.title[currentLanguage]} />
          )}
          {data && data.description[currentLanguage] && (
            <TextMusic textMusic={data.description[currentLanguage]} />
          )}
        </div>
        {data && data.musicList && <ListMusic musicList={data.musicList} />}
        {data && data.musicList > 6 && (
          <ButtonShowMoreMusic valueShowMoreMusic="Show more" />
        )}
      </div>
    </section>
  );
}

export default MusicComponent;
