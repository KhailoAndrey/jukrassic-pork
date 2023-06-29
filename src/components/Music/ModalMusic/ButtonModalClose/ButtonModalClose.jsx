import { ReactComponent as CloseIcon } from '../../../../images/Music/svg/icon-close.svg';
import scss from './ButtonModalClose.module.scss';

function ButtonModalClose({ onCloseModal }) {
  return (
    <button className={scss.buttonModalClose} onClick={onCloseModal}>
      <CloseIcon className={scss.buttonIcon} />
    </button>
  );
}

export default ButtonModalClose;
