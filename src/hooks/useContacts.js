/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { client } from '../../client';
import useLoader from './useLoader';

const useBand = () => {
  const [contacts, setContacts] = useState(null);
  const { isLoading, setLoading } = useLoader();

  useEffect(() => {
    const query = '*[_type == contacts]';

    setLoading(true);

    client
      .fetch(query)
      .then(data => {
        const socialMediaList = data[2];
        const email = data[3];
        const phone = data[4];

        setContacts({ socialMediaList, email, phone });
      })
      .catch(error => {
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { isLoading, contacts };
};

export default useBand;
