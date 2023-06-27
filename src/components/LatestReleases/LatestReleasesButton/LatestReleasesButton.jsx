import PropTypes from 'prop-types';

import { ReactComponent as RightIcon } from '../../../images/Latest-Releases/svg/Right-Icon.svg';
import scss from './LatestReleasesButton.module.scss';

function LatestReleasesButton({ LRButtonValue }) {
  return (
    <button className={scss.latestReleasesButton}>
      {LRButtonValue}
      <RightIcon className={scss.iconVector} />
    </button>
  );
}

LatestReleasesButton.propTypes = {
  LRButtonValue: PropTypes.string.isRequired,
};

export default LatestReleasesButton;
