import VideoBlock from '../VideoBlock/VideoBlock';
import scss from './VideoContainer.module.scss';

function VideoContainer() {
  return (
    <div className={scss.videoContainer}>
      <VideoBlock />
    </div>
  );
}

export default VideoContainer;
