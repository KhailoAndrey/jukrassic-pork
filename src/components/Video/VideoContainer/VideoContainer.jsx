import { useState } from 'react';
import PropTypes from 'prop-types';
import VideoBlock from '../VideoBlock/VideoBlock';
import scss from './VideoContainer.module.scss';

function VideoContainer({ data, language }) {
  const [activeVideo, setActiveVideo] = useState(null);

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

  function handleVideoClick(videoId) {
    setActiveVideo(videoId);
  }

  return (
    <div className={scss.videoContainer}>
      {track.map(el => (
        <VideoBlock
          key={el.id}
          src={el.videoLink.split('/')[3]}
          title={el.name[language]}
          isActive={activeVideo === el.id}
          onClick={() => handleVideoClick(el.id)}
        />
      ))}
    </div>
  );
}

export default VideoContainer;

VideoContainer.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.objectOf(PropTypes.string).isRequired,
    videoLinksList: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.objectOf(PropTypes.string),
        videoLink: PropTypes.string,
      })
    ).isRequired,
  }),
  language: PropTypes.string.isRequired,
};
