import PropTypes from 'prop-types';

import { ReactComponent as LyricsIcon } from '../../../../../images/Music/svg/Icon-lyrics.svg';
import scss from '../ButtonsMusic.module.scss';

function ButtonLyricsMusic({ valueButton, onClick }) {
  return (
    <button className={scss.buttonMusic} onClick={onClick}>
      <LyricsIcon className={scss.buttonIcon} />
      {valueButton}
    </button>
  );
}

ButtonLyricsMusic.propTypes = {
  valueButton: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ButtonLyricsMusic;
