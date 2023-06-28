import PropTypes from 'prop-types';
import scss from './VideoBlock.module.scss';
import ReactPlayer from 'react-player';

function VideoBlock({ src, title }) {
  return (
    <div className={scss.videoBlock}>
      <ReactPlayer
        className={scss.videoBlock_track}
        url={src}
        showinfo="0"
        modestbranding="1"
        rel="0"
        autohide="1"
        color="green"
        iv_load_policy="3"
        // color="#00fe00"
        // title={title}
        // frameBorder="0"
        enablejsapi="1"
        // controls
        // allow="accelerometer; autoplay; clipboard-write; ; gyroscope; picture-in-picture; web-share"
        // allowfullscreen
      />
      <h3 className={scss.videoBlock_track_title}>{title}</h3>
    </div>
  );
}

export default VideoBlock;

VideoBlock.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
