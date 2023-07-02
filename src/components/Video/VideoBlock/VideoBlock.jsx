import { useState } from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import scss from './VideoBlock.module.scss';
import btnYoutube from 'images/sprite.svg';

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
          playIcon={
            <svg className={scss.videoBlock_btnPlay}>
              <use href={btnYoutube + '#icon-btn-youtube'} />
            </svg>
          }
          light={`https://i.ytimg.com/vi_webp/${src}/sddefault.webp`}
          url={`https://youtu.be/${src}`}
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
