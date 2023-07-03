import VideoBlock from '../VideoBlock/VideoBlock';
import scss from './VideoContainer.module.scss';

function VideoContainer({ data, language }) {
  const track = (data && data.videoLinksList) || [
    {
      id: '1',
      name: {
        en: 'Стежка/Path (Official video 2023)',
        ua: 'Стежка (офіційне відео 2023)',
      },
      videoLink: 'https://youtu.be/CB9-SAhlUCY',
    },
  ];
  return (
    <div className={scss.videoContainer}>
      {track.map(el => (
        <VideoBlock
          key={el.id}
          src={el.videoLink.split('/')[3]}
          title={el.name[language]}
        />
      ))}
    </div>
  );
}

export default VideoContainer;
