import PropTypes from 'prop-types';

import { ReactComponent as LyricsIcon } from '../../../../../images/Music/svg/Icon-lyrics.svg';
import scss from '../ButtonsMusic.module.scss';

function ButtonLyricsMusic({ valueButton }) {
  return (
    <button className={scss.buttonMusic}>
      <LyricsIcon className={scss.buttonIcon} />
      {valueButton}
    </button>
  );
}

ButtonLyricsMusic.propTypes = {
  valueButton: PropTypes.string.isRequired,
};

export default ButtonLyricsMusic;
