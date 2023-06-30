import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { ReactComponent as RightIcon } from '../../../images/Common/svg/Right-Icon.svg';
import scss from './LatestReleasesButton.module.scss';

function LatestReleasesButton({ valueButton }) {
  return (
    <NavLink to="/music" className={scss.latestReleasesButton}>
      {valueButton}
      <RightIcon className={scss.latestReleasesIcon} />
    </NavLink>
  );
}

LatestReleasesButton.propTypes = {
  valueButton: PropTypes.string.isRequired,
};

export default LatestReleasesButton;
