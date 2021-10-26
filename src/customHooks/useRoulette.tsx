import { useState } from "react";

export const useRoulette = () => {
  const [isRoopStart, setIsRoopStart] = useState(false);
  const [rotate, setRotate] = useState(0);

  const genRandomRotate = () => {
    const MIN = 2880;
    const MAX = 5760;
    return Math.floor(Math.random() * (MAX - MIN) + MIN);
  };

  const getTargetElement = (id: string) => {
    return document.getElementById(id);
  };

  const createAnimation = (
    element: HTMLElement,
    oldRotate: number,
    sumRotate: number
  ) => {
    return element.animate(
      [
        {
          transform: `rotate(${oldRotate}deg)`,
        },
        {
          transform: `rotate(${sumRotate}deg)`,
        },
      ],
      {
        duration: 8000,
        easing: "cubic-bezier(0.45, 0, 0.15, 1)",
        fill: "forwards",
      }
    );
  };

  const start = () => {
    if (isRoopStart) return;
    const rouletteTable = getTargetElement("js-roulette-table");
    if (rouletteTable === null) return;
    const newRotate = genRandomRotate();
    const oldRotate = rotate;
    const sumRotate = oldRotate + newRotate;
    const animation = createAnimation(rouletteTable, oldRotate, sumRotate);
    animation.play();
    animation.finished.then(() => {
      setIsRoopStart(false);
    });
    setIsRoopStart(true);
    setRotate(sumRotate);
  };

  return {
    start,
  };
};
