import { useState } from 'react';
import ReactPlayer from 'react-player/youtube';
import PropTypes from 'prop-types';
import btnYoutube from 'images/sprite.svg';
import scss from './VideoBlock.module.scss';

function VideoBlock({ src, title }) {
  const [isPlay, setIsPlay] = useState(true);
  const [isPause, setIsPause] = useState(false);
  const [isCover, setIsCover] = useState(true);

  function handleClick() {
    setIsPlay(!isPlay);
    setIsPause(!isPlay);
  }
  
  function handleCloseCover () {
    // console.log('isPlay', isPlay, 'isPause', isPause)
    setIsPause(!isPause);

    if (!isPause) return;  
    setIsCover(!isCover);
  }

  // `https://i.ytimg.com/vi/${src}/maxresdefault.jpg`
  // `https://i.ytimg.com/vi/${src}/sddefault.jpg`

  return (
    <div className={scss.videoBlock}>
      <div className={scss.videoBlock_cover} onClick={handleCloseCover}>      
        <ReactPlayer
          className={scss.videoBlock_track}
          url={`https://youtu.be/${src}`}
          onPlay={handleClick}
          onPause={handleClick}
          onReady={()=> isCover}
          onEnded={()=>setIsCover(!isCover)}
          controls={true}
        />

        <div className={scss.videoInner} style={isCover ? {display: 'flex'} : {display: 'none'}}>
          <img src={`https://i.ytimg.com/vi_webp/${src}/sddefault.webp`} alt={title} />
          
          <span className={scss.videoMask}>
            <div className={scss.videoBG}/>
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
};
