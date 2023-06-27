import VideoBlock from '../VideoBlock/VideoBlock';

function VideoContainer() {
  const track = [
    {
      src: 'https://www.youtube.com/embed/CB9-SAhlUCY',
      title: 'Стежка/Path (Official video 2023)',
    },
    {
      src: 'https://www.youtube.com/embed/pcGyY7rl2C4',
      title: 'angel (ремастер відео 2019)',
    },
  ];
  return (
    <div>
      {track.map(el => (
        <VideoBlock key={el.src} src={el.src} title={el.title} />
      ))}
    </div>
  );
}

export default VideoContainer;
