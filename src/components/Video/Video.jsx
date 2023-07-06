import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageContext } from 'utils/LanguageContext';
import VideoChapter from './VideoChapter/VideoChapter';
import VideoContainer from './VideoContainer/VideoContainer';
import useFetch from 'hooks/useFetch';
import scss from './Video.module.scss';

function Video() {
  const { data } = useFetch('video');
  const { currentLanguage } = useContext(LanguageContext);
  const { t } = useTranslation();

  return (
    <section id="videos" className={scss.video}>
      <div className={scss.video_container}>
        <VideoChapter
          VChapter={(data && data.title[currentLanguage]) || t('video')}
        />
        <VideoContainer data={data && data} language={currentLanguage} />
      </div>
    </section>
  );
}

export default Video;
