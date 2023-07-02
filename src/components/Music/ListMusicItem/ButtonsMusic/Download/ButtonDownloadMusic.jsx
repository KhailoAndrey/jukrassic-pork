import PropTypes from 'prop-types';

import { ReactComponent as DownloadIcon } from '../../../../../images/Music/svg/Icon-download.svg';
import scss from '../ButtonsMusic.module.scss';

function ButtonDownloadMusic({ valueButton, audio }) {
  const handleDownload = () => {
    window.open(audio, '_blank');
  };

  return (
    <button className={scss.buttonMusic} onClick={handleDownload}>
      <DownloadIcon className={scss.buttonIcon} />
      {valueButton}
    </button>
  );
}

ButtonDownloadMusic.propTypes = {
  valueButton: PropTypes.string.isRequired,
  audio: PropTypes.string.isRequired,
};

export default ButtonDownloadMusic;
