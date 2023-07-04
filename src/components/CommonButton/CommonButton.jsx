import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { ReactComponent as RightIcon } from '../../images/Common/svg/Right-Icon.svg';
import scss from './CommonButton.module.scss';

function CommonButton({ valueButton }) {
  return (
    <NavLink to="/music" className={scss.commonButton}>
      <RightIcon className={scss.commonIconVisible} />
      <p className={scss.textTransform}>{valueButton}</p>
      <RightIcon className={scss.commonIcon} />
    </NavLink>
  );
}

CommonButton.propTypes = {
  valueButton: PropTypes.string.isRequired,
};

export default CommonButton;
