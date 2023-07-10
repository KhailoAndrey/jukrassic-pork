import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { ReactComponent as RightIcon } from '../../../images/Common/svg/Right-Icon.svg';
import scss from './ButtonNotFound.module.scss';

function ButtonNotFound({ valueButtonNotFound }) {
  return (
    <NavLink to="/#header" className={scss.buttonNotFound}>
      <RightIcon className={scss.commonIcon} />
      <p className={scss.textTransform}>{valueButtonNotFound}</p>
      <RightIcon className={scss.commonIconVisible} />
    </NavLink>
  );
}

ButtonNotFound.propTypes = {
  valueButtonNotFound: PropTypes.string.isRequired,
};

export default ButtonNotFound;
