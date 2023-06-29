import PropTypes from 'prop-types';
import scss from './ChapterMusic.module.scss';

function ChapterMusic({ chapterMusic }) {
  return <h1 className={scss.chapterMusic}>{chapterMusic}</h1>;
}

ChapterMusic.propTypes = {
  chapterMusic: PropTypes.string.isRequired,
};

export default ChapterMusic;
