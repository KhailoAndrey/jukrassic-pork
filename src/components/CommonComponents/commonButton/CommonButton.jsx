import PropTypes from 'prop-types';

import { ReactComponent as RightIcon } from '../../../images/Common/svg/Right-Icon.svg';
import scss from './CommonButton.module.scss';

function CommonButton({ valueCommonButton }) {
  return (
    <button className={scss.commonButton}>
      {valueCommonButton}
      <RightIcon className={scss.commonIcon} />
    </button>
  );
}

CommonButton.propTypes = {
  valueCommonButton: PropTypes.string.isRequired,
};

export default CommonButton;
