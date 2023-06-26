import scss from './VideoBlock.module.scss';

function VideoBlock() {
  return (
    <div className={scss.videoBlock}>
      <iframe
        width="780"
        height="439"
        src="https://www.youtube.com/embed/CB9-SAhlUCY"
        title="Jukrassic Pork feat. Mariya Ivchenko - Стежка (Path) - Official video"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <h3>Стежка/Path (Official video 2023)</h3>
    </div>
  );
}

export default VideoBlock;
