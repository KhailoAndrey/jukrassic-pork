import scss from './VideoChapter.module.scss';

function VideoChapter({ VChapter }) {
  return <div className={scss.videoChapter}>{VChapter}</div>;
}

export default VideoChapter;
