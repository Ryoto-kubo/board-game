import BaseRouletteStyle from "@/styles/components/ui/BaseRoulette.module.scss";
import { faHandPointUp } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type Props = {
  start: () => void;
};

const RouletteAnimationComponent = () => {
  return (
    <div
      id="js-roulette-table"
      className={`${BaseRouletteStyle.rouletteTable} ${BaseRouletteStyle.rotate}`}
    >
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
  );
};

export const BaseRoulette = ({ start }: Props) => {
  return (
    <div className={`${BaseRouletteStyle.root} ${BaseRouletteStyle.outer}`}>
      <div className={BaseRouletteStyle.inner}>
        <div className={BaseRouletteStyle.centerPinWrapper}>
          <button className={BaseRouletteStyle.centerPin} onClick={start}>
            <FontAwesomeIcon icon={faHandPointUp} color="#202124" size="lg" />
          </button>
        </div>
        {RouletteAnimationComponent()}
      </div>
    </div>
  );
};
