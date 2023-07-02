import { useContext } from 'react';
import useFetch from 'hooks/useFetch';
import { LanguageContext } from 'utils/LanguageContext';
import scss from './Video.module.scss';
import VideoChapter from './VideoChapter/VideoChapter';
import VideoContainer from './VideoContainer/VideoContainer';

function Video() {
  const { data } = useFetch('video');
  const { currentLanguage } = useContext(LanguageContext);

  return (
    <section id="videos" className={scss.video}>
      <div className={scss.video_container}>
        <VideoChapter
          VChapter={(data && data.title[currentLanguage]) || 'Video'}
        />
        <VideoContainer data={data && data} language={currentLanguage} />
      </div>
    </section>
  );
}

export default Video;
