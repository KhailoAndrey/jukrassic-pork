import scss from './VideoBlock.module.scss';

function VideoBlock() {
  return (
    <div className={scss.videoBlock}>
      <iframe></iframe>
      <h3>Стежка/Path (Official video 2023)</h3>
    </div>
  );
}

export default VideoBlock;
