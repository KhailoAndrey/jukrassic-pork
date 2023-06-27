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
    //     <picture>
    //   <source
    //     srcset="
    //               /src/images/hotel/hotel_room/hotel_room_desk_1_460_1x.jpg 1x,
    //               /src/images/hotel/hotel_room/hotel_room_desk_1_460_2x.jpg 2x
    //             "
    //     media="(min-width: 1280px)"
    //   />
    //   <source
    //     srcset="
    //               /src/images/hotel/hotel_room/hotel_room_tab_1_400_1x.jpg 1x,
    //               /src/images/hotel/hotel_room/hotel_room_tab_1_400_2x.jpg 2x
    //             "
    //     media="(min-width: 1024px)"
    //   />
    //   <source
    //     srcset="
    //               /src/images/hotel/hotel_room/hotel_room_mob_1_244_1x.jpg 1x,
    //               /src/images/hotel/hotel_room/hotel_room_mob_1_244_2x.jpg 2x
    //             "
    //     media="(max-width: 1023.98px)"
    //   />
    //   <img
    //     src="/src/images/hotel/hotel_room/hotel_room_mob_1_244_1x.jpg"
    //     alt="Double room lux"
    //     class="hotel-room-image hotel-room-img three-adult"
    //   />
    // </picture>
  );
}

export default LatestReleasesPlayers;
