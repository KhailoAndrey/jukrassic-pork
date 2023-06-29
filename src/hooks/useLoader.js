import { useState } from 'react';

const useLoader = () => {
  const [isLoading, setLoading] = useState(false);

  return { isLoading, setLoading };
};

export default useLoader;
