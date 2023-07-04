import { useState, useEffect } from 'react';

const useModal = ({ styles }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      return document.body.classList.add(styles);
    }
    document.body.classList.remove(styles);
  }, [isModalOpen, styles]);

  return { isModalOpen, setIsModalOpen };
};

export default useModal;
