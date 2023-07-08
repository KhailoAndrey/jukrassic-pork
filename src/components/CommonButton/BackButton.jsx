import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { ReactComponent as RightIcon } from '../../images/Common/svg/Right-Icon.svg';
import scss from './BackButton.module.scss';
function BackButton({ valueButton }) {
  return (
    <NavLink to="/#header" className={scss.commonButton}>
      <RightIcon className={scss.commonIcon} />
      <p className={scss.textTransform}>{valueButton}</p>
      <RightIcon className={scss.commonIconVisible} />
    </NavLink>
  );
}

BackButton.propTypes = {
  valueButton: PropTypes.string.isRequired,
};

export default BackButton;
