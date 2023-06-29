import HeaderMenu from '../../components/Header/HeaderContent/HeaderMenu';

import ChapterMusic from './ChapterMusic/ChapterMusic';
import TextMusic from './TextMusic/TextMusic';
import ListMusic from './ListMusic/ListMusic';
import ButtonShowMoreMusic from './ButtonShowMoreMusic/ButtonShowMoreMusic';

import scss from './MusicComponent.module.scss';

function MusicComponent() {
  const textMusic =
    'Vyacheslav Lozowy is the author of the lyrics of all the songs, provides the overall production of the project. In our music we combine different styles, synthesizer, electro and acoustic guitar with incredible female vocals.';
  const listArrayMusic = [];
  return (
    <section className={scss.musicComponent}>
      <div className="container">
        <HeaderMenu />
        <div className={scss.boxChapterText}>
          <ChapterMusic chapterMusic="music" />
          <TextMusic textMusic={textMusic} />
        </div>
        <ListMusic listArrayMusic={listArrayMusic} />
        <ButtonShowMoreMusic valueShowMoreMusic="Show more" />
      </div>
    </section>
  );
}

export default MusicComponent;
