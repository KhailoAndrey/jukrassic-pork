import VideoBlock from '../VideoBlock/VideoBlock';
import scss from './VideoContainer.module.scss';

function VideoContainer() {
  const track = [
    {
      src: 'CB9-SAhlUCY',
      image: '',
      title: 'Стежка/Path (Official video 2023)',
    },
    {
      src: 'pcGyY7rl2C4',
      title: 'angel (ремастер відео 2019)',
    },
  ];
  return (
    <div className={scss.videoContainer}>
      {track.map(el => (
        <VideoBlock key={el.src} src={el.src} title={el.title} />
      ))}
    </div>
  );
}

export default VideoContainer;
