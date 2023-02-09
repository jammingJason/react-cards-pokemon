import React, { useState } from 'react';

const useFlip = () => {
  const [flipState, setFlipState] = useState(true);
  const flipOverCard = () => {
    setFlipState((isUp) => !isUp);
  };
  return [flipState, flipOverCard];
};

export default useFlip;
