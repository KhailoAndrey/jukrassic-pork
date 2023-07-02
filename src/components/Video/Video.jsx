import useFetch from 'hooks/useFetch';
import scss from './Video.module.scss';
import VideoChapter from './VideoChapter/VideoChapter';
import VideoContainer from './VideoContainer/VideoContainer';
import { LanguageContext } from 'utils/LanguageContext';
import { useContext } from 'react';

function Video() {
  const { data } = useFetch('video');
  const { currentLanguage } = useContext(LanguageContext);
  console.log('video-data', data);

  return (
    <section id="videos" className={scss.video}>
      <div className={scss.video_container}>
        <VideoChapter VChapter={data.title[currentLanguage]} />
        <VideoContainer />
      </div>
    </section>
  );
}

export default Video;
