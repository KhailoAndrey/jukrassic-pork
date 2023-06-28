import PropTypes from 'prop-types';
import scss from './VideoBlock.module.scss';
import { ReactComponent as BtnYoutube } from '../../../images/btn_youtube.svg';

function VideoBlock({ src, title }) {
  return (
    <div className={scss.videoBlock}>
      <iframe
        className={scss.videoBlock_track}
        src={`https://www.youtube.com/embed/${src}`}
        frameBorder="0"
      />
      <div className={scss.videoBlock_cover}>
        <BtnYoutube className={scss.videoBlock_youtube} />
        <img
          className={scss.videoBlock_image}
          src={`https://i.ytimg.com/vi_webp/${src}/sddefault.webp`}
          alt={title}
        />
      </div>

      <h3 className={scss.videoBlock_track_title}>{title}</h3>
    </div>
  );
}

export default VideoBlock;

VideoBlock.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
