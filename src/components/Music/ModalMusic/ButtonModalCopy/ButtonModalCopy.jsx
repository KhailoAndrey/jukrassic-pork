import PropTypes from 'prop-types';
import clipboardCopy from 'clipboard-copy';

import { ReactComponent as CopyIcon } from '../../../../images/Music/svg/icon-copy.svg';
import scss from './ButtonModalCopy.module.scss';

function ButtonModalCopy({ valueButton, textToCopy }) {
  const handleCopy = () => {
    clipboardCopy(textToCopy);
  };

  return (
    <button className={scss.buttonModalCopy} onClick={handleCopy}>
      <CopyIcon className={scss.buttonIcon} />
      {valueButton}
    </button>
  );
}

ButtonModalCopy.propTypes = {
  valueButton: PropTypes.string.isRequired,
  textToCopy: PropTypes.string.isRequired,
};

export default ButtonModalCopy;
