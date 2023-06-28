/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { client, urlFor } from '../../client';
import useLoader from './useLoader';

const useHistory = () => {
  const [historyList, setHistoryList] = useState();
  const { isLoading, setLoading } = useLoader();

  useEffect(() => {
    const query = '*[_type == history]';

    setLoading(true);

    client
      .fetch(query)
      .then(data => {
        const listHistory = data[2].map(el => {
          const { srcJpg, srcWebp } = el;

          return {
            srcJpg: urlFor(srcJpg?.asset),
            srcWebp: urlFor(srcWebp?.asset),
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

export default useHistory;
