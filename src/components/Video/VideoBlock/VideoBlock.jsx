import scss from './VideoBlock.module.scss';

function VideoBlock({ src, title }) {
  return (
    <div className={scss.videoBlock}>
      <iframe
        src={src}
        title={title}
        frameBorder="0"
        // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        // allowfullscreen
      ></iframe>
      <h3>{title}</h3>
    </div>
  );
}

export default VideoBlock;
