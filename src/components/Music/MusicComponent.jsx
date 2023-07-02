import HeaderMenu from '../../components/Header/HeaderContent/HeaderMenu';
import ChapterMusic from './ChapterMusic/ChapterMusic';
import TextMusic from './TextMusic/TextMusic';
import ListMusic from './ListMusic/ListMusic';
import ButtonShowMoreMusic from './ButtonShowMoreMusic/ButtonShowMoreMusic';

import useFetch from '../../hooks/useFetch';
import scss from './MusicComponent.module.scss';

function MusicComponent() {
  const { data } = useFetch('music');
  console.log(data);

  return (
    <section className={scss.musicComponent}>
      <div className="container">
        <HeaderMenu />
        <div className={scss.boxChapterText}>
          {data && data.title.en && (
            <ChapterMusic chapterMusic={data.title.en} />
          )}
          {data && data.description && (
            <TextMusic textMusic={data.description.en} />
          )}
        </div>
        {data && data.musicList && <ListMusic musicList={data.musicList} />}
        <ButtonShowMoreMusic valueShowMoreMusic="Show more" />
      </div>
    </section>
  );
}

export default MusicComponent;
