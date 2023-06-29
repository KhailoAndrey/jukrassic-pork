import PropTypes from 'prop-types';

import { ReactComponent as CopyIcon } from '../../../../images/Music/svg/icon-copy.svg';
import scss from './ButtonModalCopy.module.scss';

function ButtonModalCopy({ valueButton }) {
  return (
    <button className={scss.buttonModalCopy}>
      <CopyIcon className={scss.buttonIcon} />
      {valueButton}
    </button>
  );
}

ButtonModalCopy.propTypes = {
  valueButton: PropTypes.string.isRequired,
};

export default ButtonModalCopy;
