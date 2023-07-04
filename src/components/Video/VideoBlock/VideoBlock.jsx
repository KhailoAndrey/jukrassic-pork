import { useState } from 'react';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types';
import btnYoutube from 'images/sprite.svg';
import scss from './VideoBlock.module.scss';

function VideoBlock({ src, title }) {
  const [isPlay, setIsPlay] = useState(true);

  function handleClick() {
    setIsPlay(!isPlay);
  }

  return (
    <div className={scss.videoBlock}>
      <div className={scss.videoBlock_cover}>
      
        <div className={scss.a}>
          <img src={`https://i.ytimg.com/vi_webp/${src}/sddefault.webp`} alt="" />
          <span className={scss.mask}>
            <div className={scss.mask1}/>
            <svg className={scss.videoBlock_btnPlay}>
              <use href={btnYoutube + '#icon-btn-youtube'} />
            </svg>
          </span>
        </div>
      
        <ReactPlayer
          className={scss.videoBlock_track}
          // playIcon={
          //   <svg className={scss.videoBlock_btnPlay}>
          //     <use href={btnYoutube + '#icon-btn-youtube'} />
          //   </svg>
          // }
          // light={
          //   // `https://i.ytimg.com/vi/${src}/maxresdefault.jpg` === 'true' ?
          //   `https://i.ytimg.com/vi_webp/${src}/sddefault.webp`
          //   // : `https://i.ytimg.com/vi/${src}/sddefault.jpg`
          // }
          url={`https://youtu.be/${src}`}
          // playing={isPlay}
          onPlay={handleClick}
          onPause={handleClick}
          onReady={handleClick}
          controls={true}
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
