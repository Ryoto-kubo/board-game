// import { Wheel } from "react-custom-roulette";
import BaseRouletteStyle from "@/styles/components/ui/BaseRoulette.module.scss";
// import Anime from "react-anime";
import dynamic from "next/dynamic";
import React, { useState } from "react";

const Anime = dynamic(() => import("react-anime"), {
  ssr: false,
});
const RouletteAnimationComponent = (isRoop: boolean, rotate: number) => {
  return (
    <Anime
      easing="easeInOutCirc"
      duration={8000}
      rotate={rotate}
      loop={false}
      autoplay={isRoop}
    >
      <div id="js-roulette-table" className={BaseRouletteStyle.rouletteTable}>
        <div className={BaseRouletteStyle.centerHr}></div>
        <div className={BaseRouletteStyle.slantedRightHr}></div>
        <div className={BaseRouletteStyle.slantedLeftHr}></div>
        <div className={`${BaseRouletteStyle.num} ${BaseRouletteStyle.first}`}>
          1
        </div>
        <div className={`${BaseRouletteStyle.num} ${BaseRouletteStyle.second}`}>
          2
        </div>
        <div className={`${BaseRouletteStyle.num} ${BaseRouletteStyle.third}`}>
          3
        </div>
        <div className={`${BaseRouletteStyle.num} ${BaseRouletteStyle.four}`}>
          4
        </div>
        <div className={`${BaseRouletteStyle.num} ${BaseRouletteStyle.five}`}>
          5
        </div>
        <div className={`${BaseRouletteStyle.num} ${BaseRouletteStyle.six}`}>
          6
        </div>
      </div>
    </Anime>
  );
};
export const BaseRoulette = () => {
  const [isRoop, setIsRoop] = useState(false);
  const [rotate, setRotate] = useState(0);

  // useEffect(() => {
  //   const pinNode = document.getElementById("js-roulette-table");
  //   if (pinNode === null) return;
  //   const sec = 4;
  //   let deg = 0;

  //   console.log(Math.pow(0.5, 2) * ((deg + 1) * 0.5 - deg));

  //   setInterval(() => {
  //     deg++;
  //     // console.log(Math.pow(deg, 2) + deg);
  //     deg = Math.pow(1, 2) * ((deg + 1) * 1 - deg) + deg;
  //     pinNode.style.transform = `rotate(${deg}deg)`;
  //   }, 10);
  // }, []);
  const genRandomRotate = () => {
    const MIN = 3600;
    const MAX = 7200;
    return Math.floor(Math.random() * (MAX - MIN) + MIN);
  };
  const start = () => {
    setIsRoop(true);
    setRotate(genRandomRotate() + rotate);
  };
  const init = () => {
    setIsRoop(false);
  };

  return (
    <div className={BaseRouletteStyle.root}>
      <div className={BaseRouletteStyle.centerPinWrapper}>
        <div className={BaseRouletteStyle.centerPin}></div>
      </div>
      {RouletteAnimationComponent(isRoop, rotate)}
      <button onClick={start}>roop</button>
      <button onClick={init}>init</button>
    </div>
  );
};
