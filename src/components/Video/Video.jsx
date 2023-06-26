import scss from './Video.module.scss';
import VideoChapter from './VideoChapter/VideoChapter';
import VideoContainer from './VideoContainer/VideoContainer';

function Video() {
  return (
    <div className={scss.video}>
      <VideoChapter VChapter="video" />
      <VideoContainer />
    </div>
  );
}

export default Video;
