/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { client, urlFor } from '../client';
import useLoader from './useLoader';

const useBand = () => {
  const [bandData, setBandData] = useState(null);
  const { isLoading, setLoading } = useLoader();

  useEffect(() => {
    const query = '*[_type == "band"]';

    setLoading(true);

    client
      .fetch(query)
      .then(data => {
        const formattedData = data.map(
          ({ title, description, bandList, _id }) => {
            return {
              id: _id,
              title: { en: title.en, ua: title.ua },
              description: { en: description.en, ua: description.ua },
              bandList: bandList.map(
                ({ name, specialization, bandImage, descriptionList }) => {
                  return {
                    name: { en: name.en, ua: name.ua },
                    specialization: {
                      en: specialization.en,
                      ua: specialization.ua,
                    },
                    bandImage: urlFor(bandImage?.asset),
                    descriptionList: descriptionList.map(
                      ({ description, _key }) => {
                        return {
                          id: _key,
                          description: {
                            en: description.en,
                            ua: description.ua,
                          },
                        };
                      }
                    ),
                  };
                }
              ),
            };
          }
        );

        setBandData(formattedData[0]);
      })
      .catch(error => {
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { isLoading, bandData };
};

export default useBand;
