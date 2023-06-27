import PropTypes from 'prop-types';

import { ReactComponent as RightIcon } from '../../../images/Common/svg/Right-Icon.svg';
import scss from './ButtonNotFound.module.scss';

function ButtonNotFound({ valueButtonNotFound }) {
  return (
    <button className={scss.buttonNotFound}>
      <RightIcon className={scss.commonIcon} />
      {valueButtonNotFound}
    </button>
  );
}

ButtonNotFound.propTypes = {
  valueButtonNotFound: PropTypes.string.isRequired,
};

export default ButtonNotFound;
