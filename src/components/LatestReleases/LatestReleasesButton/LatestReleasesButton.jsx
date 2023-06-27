import PropTypes from 'prop-types';

// import LatestReleasesIcon from './LatestReleasesIcon/LatestReleasesIcon';
import { ReactComponent as RightIcon } from '../../../images/Latest-Releases/svg/symbol-defs.svg#icon-Right-Icon';
import scss from './LatestReleasesButton.module.scss';

function LatestReleasesButton({ LRButtonValue }) {
  return (
    <button className={scss.latestReleasesButton}>
      {LRButtonValue}
      {/* <LatestReleasesIcon LRVectorIconUrl={LRVectorIconUrl} /> */}
      <RightIcon className={scss.iconVector} />
    </button>
  );
}

LatestReleasesButton.propTypes = {
  LRButtonValue: PropTypes.string.isRequired,
  LRVectorIconUrl: PropTypes.string.isRequired,
};

export default LatestReleasesButton;
