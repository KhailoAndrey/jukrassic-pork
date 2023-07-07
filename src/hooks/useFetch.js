/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { client } from '../client';
import useLoader from './useLoader';
import {
  historyFormattedFn,
  bandFormattedFn,
  contactsFormattedFn,
  musicFormattedFn,
  releasesFormattedFn,
  videoFormattedFn,
} from '../utils/fetchFormatFunctions';

// перелік доступних пропсів
const objectOfPropsAndRoutes = {
  history: 'header',
  band: 'members',
  contacts: 'contacts',
  video: 'videos',
  music: 'music',
  releases: 'latest-releases',
};

const useFetch = (type = 'history') => {
  const [data, setData] = useState(null);
  const { isLoading, setLoading } = useLoader();
  const location = useLocation();

  const fnsForFormat = {
    history: historyFormattedFn,
    band: bandFormattedFn,
    contacts: contactsFormattedFn,
    music: musicFormattedFn,
    releases: releasesFormattedFn,
    video: videoFormattedFn,
  }[type];

  useEffect(() => {
    const query = `*[_type == "${type}"]`;

    setLoading(true);

    client
      .fetch(query)
      .then(data => {
        const formattedData = data.map(fnsForFormat);
        setData(formattedData[0]);
      })
      .catch(error => {
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);

        if (
          location.hash &&
          objectOfPropsAndRoutes[type] === location.hash.slice(1)
        ) {
          const link = document.createElement('a');
          link.href = `${location.hash}`;
          link.style.display = 'none';

          document.body.appendChild(link);
          link.click();

          document.body.removeChild(link);
        }
      });
  }, []);

  if (
    !Object.keys(objectOfPropsAndRoutes).some(el => el === type) &&
    typeof type !== 'string'
  ) {
    return new Error(
      `Invalid prop ${type} passed to useFetch. Expected a valid type and name of param. You can pass only ['history', 'band', 'contacts', 'music', 'releases', 'video']`
    );
  }

  return { isLoading, data };
};

export default useFetch;
