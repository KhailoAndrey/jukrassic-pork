import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player/youtube';
import PropTypes from 'prop-types';
import btnYoutube from 'images/sprite.svg';
import scss from './VideoBlock.module.scss';

function VideoBlock({ src, title, isActive, onClick }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isCover, setIsCover] = useState(true);

  useEffect(() => {
    setIsPlaying(isActive);
  }, [isActive]);

  function handlePlay() {
    setIsPlaying(true);
    onClick();
  }

  function handlePause() {
    setIsPlaying(false);
  }

  function handleCloseCover() {
    setIsCover(!isCover);
  }

  return (
    <div className={scss.videoBlock}>
      <div className={scss.videoBlock_cover} onClick={handleCloseCover}>
        {!isCover && (
          <ReactPlayer
            className={scss.videoBlock_track}
            url={`https://youtu.be/${src}`}
            playing={isPlaying}
            onPlay={handlePlay}
            onPause={handlePause}
            onReady={handlePlay}
            onEnded={() => setIsCover(!isCover)}
            controls={true}
          />
        )}

        <div
          className={scss.videoInner}
          style={isCover ? { display: 'flex' } : { display: 'none' }}
        >
          <img
            src={`https://i.ytimg.com/vi/${src}/maxresdefault.jpg`}
            alt={title}
          />

          <span className={scss.videoMask}>
            <div className={scss.videoBG} />
            <svg className={scss.videoBlock_btnPlay}>
              <use href={btnYoutube + '#icon-btn-youtube'} />
            </svg>
          </span>
        </div>
      </div>
      <h3 className={scss.videoBlock_track_title}>{title}</h3>
    </div>
  );
}

export default VideoBlock;

VideoBlock.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
