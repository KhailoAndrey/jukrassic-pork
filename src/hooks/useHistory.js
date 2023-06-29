/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { client, urlFor } from '../client';
import useLoader from './useLoader';

const useHistory = () => {
  const [historyList, setHistoryList] = useState(null);
  const { isLoading, setLoading } = useLoader();

  useEffect(() => {
    const query = '*[_type == "history"]';

    setLoading(true);

    client
      .fetch(query)
      .then(data => {
        const formattedData = data.map(
          ({ title, description, historyImgList, _id }) => {
            return {
              id: _id,
              title: { en: title.en, ua: title.ua },
              description: { en: description.en, ua: description.ua },
              historyImgList: historyImgList.map(({ srcJpg, srcWebp }) => {
                return {
                  srcJpg: urlFor(srcJpg?.asset),
                  srcWebp: urlFor(srcWebp?.asset),
                };
              }),
            };
          }
        );

        setHistoryList(formattedData[0]);
      })
      .catch(error => {
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { isLoading, historyList };
};

export default useHistory;
