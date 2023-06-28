/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { client, urlFor } from '../../client';
import useLoader from './useLoader';

const useBand = () => {
  const [historyList, setHistoryList] = useState([]);
  const { isLoading, setLoading } = useLoader();

  useEffect(() => {
    const query = '*[_type == band]';

    setLoading(true);

    client
      .fetch(query)
      .then(data => {
        const listHistory = data[2].map(el => {
          const { name, specialization, description, bandImage } = el;

          return {
            name,
            specialization,
            description,
            bandImage: urlFor(bandImage?.asset),
          };
        });

        setHistoryList(listHistory);
      })
      .catch((error) => {
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { isLoading, historyList };
};

export default useBand;
