import scss from './Video.module.scss';
import VideoChapter from './VideoChapter/VideoChapter';
import VideoContainer from './VideoContainer/VideoContainer';

function Video() {
  const lenguage = {
    ua: 'відео',
    uk: 'video',
  };
  return (
    <div className={scss.video}>
      <VideoChapter VChapter={lenguage ? lenguage.uk : lenguage.ua} />
      <VideoContainer />
    </div>
  );
}

export default Video;
