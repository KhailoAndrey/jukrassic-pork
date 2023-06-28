import LabelMusic from './LabelMusic/LabelMusic';
import TextMusic from './TextMusic/TextMusic';
import ListMusic from './ListMusic/ListMusic';

import scss from './MusicComponent.module.scss';

function MusicComponent() {
  const textMusic =
    'Vyacheslav Lozowy is the author of the lyrics of all the songs, provides the overall production of the project. In our music we combine different styles, synthesizer, electro and acoustic guitar with incredible female vocals.';
  const listArrayMusic = [];
  return (
    <section className={scss.musicComponent}>
      <div className="container">
        <LabelMusic labelMusic="music" />
        <TextMusic textMusic={textMusic} />
        <ListMusic listArrayMusic={listArrayMusic} />
      </div>
    </section>
  );
}

export default MusicComponent;
