import PropTypes from 'prop-types';

import { ReactComponent as DownloadIcon } from '../../../../../images/Music/svg/Icon-download.svg';
import scss from '../ButtonsMusic.module.scss';

function ButtonDownloadMusic({ valueButton }) {
  return (
    <button className={scss.buttonMusic}>
      <DownloadIcon className={scss.buttonIcon} />
      {valueButton}
    </button>
  );
}

ButtonDownloadMusic.propTypes = {
  valueButton: PropTypes.string.isRequired,
};

export default ButtonDownloadMusic;
