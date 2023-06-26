import ReactPlayer from 'react-player';

import scss from './LatestReleasesPlayers.module.scss';

function LatestReleasesPlayers() {
  return (
    <ul className={scss.listPlayers}>
      <li className={scss.playerBox}>
        <ReactPlayer
          className={scss.reactPlayer}
          //   light={
          // <img src="../../../images/Latest-Releases/jpg/sun.jpg" alt="Sun" />
          //   }
          url="https://soundcloud.com/glennmorrison/beethoven-moonlight-sonata"
          width="343px"
          height="252px"
        />
      </li>
      <li className={scss.playerBox}>
        <ReactPlayer
          className={scss.reactPlayer}
          //   light={
          // <img src="../../../images/Latest-Releases/jpg/sun.jpg" alt="Sun" />
          //   }
          url="https://soundcloud.com/glennmorrison/beethoven-moonlight-sonata"
          width="343px"
          height="252px"
        />
      </li>
    </ul>
  );
}

export default LatestReleasesPlayers;
