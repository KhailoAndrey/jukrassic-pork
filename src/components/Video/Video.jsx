import scss from './Video.module.scss';
import VideoChapter from './VideoChapter/VideoChapter';
import VideoContainer from './VideoContainer/VideoContainer';

function Video() {
  const language = {
    ua: 'відео',
    uk: 'video',
  };
  return (
    <div className={scss.video}>
      <div className={scss.container}>
        <VideoChapter VChapter={language ? language.uk : language.ua} />
        <VideoContainer />
      </div>
    </div>
  );
}

export default Video;
