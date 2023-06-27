import PropTypes from 'prop-types';
import scss from './VideoBlock.module.scss';

function VideoBlock({ src, title }) {
  return (
    <div className={scss.videoBlock}>
      <iframe
        className={scss.videoBlock_track}
        src={src}
        title={title}
        frameBorder="0"
        // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        // allowfullscreen
      ></iframe>
      <h3 className={scss.videoBlock_track_title}>{title}</h3>
    </div>
  );
}

export default VideoBlock;

VideoBlock.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
