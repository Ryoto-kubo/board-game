// import { Wheel } from "react-custom-roulette";
import BaseRouletteStyle from "@/styles/components/ui/BaseRoulette.module.scss";
import React from "react";

interface WheelCanvasProps extends DrawWheelProps {
  width: string;
  height: string;
  data: any;
}

interface DrawWheelProps {
  outerBorderColor: string;
  outerBorderWidth: number;
  innerRadius: number;
  innerBorderColor: string;
  innerBorderWidth: number;
  radiusLineColor: string;
  radiusLineWidth: number;
  fontSize: number;
  perpendicularText: boolean;
  textDistance: number;
}

export const BaseRoulette = () => {
  return (
    <div className={BaseRouletteStyle.root}>
      <div className={BaseRouletteStyle.centerHr}></div>
      <div className={BaseRouletteStyle.slantedRightHr}></div>
      <div className={BaseRouletteStyle.slantedLeftHr}></div>
      <div className={BaseRouletteStyle.centerPinWrapper}>
        <div className={BaseRouletteStyle.centerPin}></div>
      </div>
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
