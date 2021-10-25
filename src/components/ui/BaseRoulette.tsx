import BaseRouletteStyle from "@/styles/components/ui/BaseRoulette.module.scss";
import dynamic from "next/dynamic";
import React from "react";
const Anime = dynamic(() => import("react-anime"), {
  ssr: false,
});

type Props = {
  isRoop: boolean;
  rotate: number;
  hideAfter5Sec: () => void;
};

const RouletteAnimationComponent = (
  isRoop: boolean,
  rotate: number,
  hideAfter5Sec: () => void
) => {
  return (
    <Anime
      easing="easeInOutCirc"
      duration={8000}
      rotate={rotate}
      loop={false}
      autoplay={isRoop}
      complete={hideAfter5Sec}
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

export const BaseRoulette = ({ isRoop, rotate, hideAfter5Sec }: Props) => {
  return (
    <>
      <div className={BaseRouletteStyle.root}>
        <div className={BaseRouletteStyle.centerPinWrapper}>
          <div className={BaseRouletteStyle.centerPin}></div>
        </div>
        {RouletteAnimationComponent(isRoop, rotate, hideAfter5Sec)}
      </div>
    </>
  );
};
