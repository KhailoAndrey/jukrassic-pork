import scss from './LatestReleasesButton.module.scss';

function LatestReleasesButton({ LRButtonValue }) {
  return <button className={scss.lrbutton}>{LRButtonValue}</button>;
}

export default LatestReleasesButton;
