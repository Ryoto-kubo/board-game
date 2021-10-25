import { useState } from "react";

export const useRoulette = () => {
  const [isRoop, setIsRoop] = useState(false);
  const [rotate, setRotate] = useState(0);

  const genRandomRotate = () => {
    const MIN = 2880;
    const MAX = 5760;
    return Math.floor(Math.random() * (MAX - MIN) + MIN);
  };

  const start = () => {
    if (isRoop) return;
    setIsRoop(true);
    setRotate(genRandomRotate());
  };

  const hideAfter5Sec = () => {
    setTimeout(() => {
      setIsRoop(false);
    }, 5000);
  };

  return {
    isRoop,
    rotate,
    start,
    hideAfter5Sec,
  };
};
