import { useEffect, useState } from 'react';
import { client } from '../../client';

const useMusic = () => {
  const [musicList, setMusicList] = useState([]);

  useEffect(() => {
    const query = '*[_type == music]';

    client.fetch(query).then(data => {
      const listMusic = data.map(el => {
        const musicItem = el.audio.asset._ref;
        const assetRefParts = musicItem.split('-');

        const id = assetRefParts[1];
        const format = assetRefParts[2];

        return `https://cdn.sanity.io/files/fsdmjee1/production/${id}.${format}`;
      });

      //   const ref = data[0].audio.asset._ref;

      //   const assetRefParts = ref.split('-');
      //   const id = assetRefParts[1];
      //   const format = assetRefParts[2];
      //   const assetUrl = `https://cdn.sanity.io/files/fsdmjee1/production/${id}.${format}`;

      //   console.log('assetUrl', assetUrl);

      setMusicList(listMusic);
    });
  }, []);

  return { musicList };
};

export default useMusic;
