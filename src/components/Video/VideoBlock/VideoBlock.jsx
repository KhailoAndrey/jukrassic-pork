import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import scss from './VideoBlock.module.scss';
import { ReactComponent as BtnYoutube } from '../../../images/btn_youtube.svg';
import { useState } from 'react';

function VideoBlock({ src, title }) {
  const [isPlay, setIsPlay] = useState(true);

  function handleClick() {
    setIsPlay(!isPlay);
  }

  return (
    <div className={scss.videoBlock}>
      <div className={scss.videoBlock_cover}>
        <ReactPlayer
          className={scss.videoBlock_track}
          playIcon={<BtnYoutube />}
          light={`https://i.ytimg.com/vi_webp/${src}/sddefault.webp`}
          url={`https://www.youtube.com/embed/${src}`}
          playing={isPlay}
          onPlay={handleClick}
          onPause={handleClick}
          onReady={handleClick}
          controls={false}
        />
      </div>
      <h3 className={scss.videoBlock_track_title}>{title}</h3>
    </div>
  );
}

export default VideoBlock;

VideoBlock.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
