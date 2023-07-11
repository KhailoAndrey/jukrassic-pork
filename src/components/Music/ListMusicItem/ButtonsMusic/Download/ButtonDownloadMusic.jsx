import PropTypes from 'prop-types';

import { ReactComponent as DownloadIcon } from '../../../../../images/Music/svg/Icon-download.svg';
import scss from '../ButtonsMusic.module.scss';

function ButtonDownloadMusic({ valueButton, songDownloadLink }) {
  const handleDownload = () => {
    window.open(songDownloadLink);
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
  songDownloadLink: PropTypes.string.isRequired,
};

export default ButtonDownloadMusic;
