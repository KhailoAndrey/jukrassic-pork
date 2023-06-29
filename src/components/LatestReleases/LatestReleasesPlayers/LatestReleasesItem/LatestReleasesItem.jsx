import PropTypes from 'prop-types';

import sunImage from '../../../../images/Latest-Releases/jpg/sun.jpg';
import pathImage from '../../../../images/Latest-Releases/jpg/path.jpg';
import ReactPlayer from 'react-player';

import LatestReleaesIconPlay from './LatestReleaesIconPlay/LatestReleaesIconPlay';
import LatestReleaesText from './LatestReleasesText/LatestReleasesText';

import scss from './LatestReleasesItem.module.scss';

function LatestReleaesItem({
  handleVideoPlay,
  handleVideoPause,
  currentVideoIndex,
}) {
  return (
    <>
      <li className={scss.playerBox}>
        <ReactPlayer
          className={scss.reactPlayer}
          light={sunImage}
          url="https://www.youtube.com/watch?v=5FTdGhSGtoU"
          width="300px"
          height="252px"
          playIcon={<LatestReleaesIconPlay className={scss.icon} />}
          playing={currentVideoIndex === 0}
          onPlay={() => handleVideoPlay(0)}
          onPause={handleVideoPause}
        />
        <LatestReleaesText
          currentVideoIndex={currentVideoIndex}
          valueText="текст/text"
          index={0}
        />
        <div className={scss.videoSlider}></div>
      </li>
      <li className={scss.playerBox}>
        <ReactPlayer
          className={scss.reactPlayer}
          light={pathImage}
          url="https://www.youtube.com/watch?v=5FTdGhSGtoU"
          width="300px"
          height="252px"
          playIcon={<LatestReleaesIconPlay className={scss.icon} />}
          playing={currentVideoIndex === 1}
          onPlay={() => handleVideoPlay(1)}
          onPause={handleVideoPause}
        />
        <LatestReleaesText
          currentVideoIndex={currentVideoIndex}
          valueText="текст/text"
          index={1}
        />
        <div className={scss.videoSlider}></div>
      </li>
    </>
  );
}

LatestReleaesItem.propTypes = {
  valueText: PropTypes.string.isRequired,
  handleVideoPlay: PropTypes.func.isRequired,
  handleVideoPause: PropTypes.func.isRequired,
  currentVideoIndex: PropTypes.number,
};

export default LatestReleaesItem;
