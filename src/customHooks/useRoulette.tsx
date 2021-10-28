import {
  PlayerOrderType,
  PlayerStateType,
  TileListType,
} from "@/types/pages/board-game";
import { Dispatch, SetStateAction, useState } from "react";

export const useRoulette = (
  playerOrder: PlayerOrderType,
  playerState: PlayerStateType,
  setPlayerState: Dispatch<SetStateAction<PlayerStateType>>,
  tileList: TileListType
) => {
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
        duration: 7000,
        easing: "cubic-bezier(0.45, 0, 0.15, 1)",
        fill: "forwards",
      }
    );
  };

  const getAfterPoint = (num: number) => {
    var arr = String(num).split(".");
    // 小数点以下がある場合と、ない場合
    if (arr[1]) {
      // 先頭に '0.' をつける
      return Number("0." + arr[1]);
    } else {
      return 0; // 小数点以下がない場合は0を返す
    }
  };

  const getStepByRotateDeg = (rotateDeg: number) => {
    if (301 <= rotateDeg && rotateDeg <= 360) {
      return 1;
    } else if (241 <= rotateDeg && rotateDeg <= 300) {
      return 2;
    } else if (181 <= rotateDeg && rotateDeg <= 240) {
      return 3;
    } else if (121 <= rotateDeg && rotateDeg <= 180) {
      return 4;
    } else if (61 <= rotateDeg && rotateDeg <= 120) {
      return 5;
    } else if (0 <= rotateDeg && rotateDeg <= 60) {
      return 6;
    } else {
      return 1;
    }
  };

  const convertRotateToSteps = (sumRotate: number) => {
    const BASE_DEG = 360;
    // 何回転したかを計算
    const divisionRotate = sumRotate / BASE_DEG;
    // 小数点以下を抽出
    const rotatePercent = getAfterPoint(divisionRotate);
    // 360でかけて何度回ったかを計算
    const rotateDeg = rotatePercent * BASE_DEG;
    return getStepByRotateDeg(rotateDeg);
  };

  const movePlayer = (step: number, playerOrder: "player1" | "player2") => {
    const playerElement = getTargetElement(playerOrder);
    if (playerElement === null) return;
    const currentPlayer = playerState[playerOrder];
    const shourdStepsForward = currentPlayer.stepsForward;
    let prevPositionX = currentPlayer.positionX;
    let prevPositionY = currentPlayer.positionY;
    for (let i = shourdStepsForward; i <= shourdStepsForward + step; i++) {
      const targetTile = tileList[i];
      const nextPositionX = targetTile.positionX;
      const nextPositionY = targetTile.positionY;
      playerElement.animate(
        [
          {
            transform: `translate(${prevPositionX}px ,${prevPositionY}px)　rotateY(0deg) `,
          },
          {
            transform: `translate(${nextPositionX}px ,${nextPositionY}px) rotateY(720deg) `,
          },
        ],
        {
          duration: 500,
          fill: "forwards",
        }
      );
      prevPositionX = nextPositionX;
      prevPositionY = nextPositionY;
    }
    setPlayerState({
      ...playerState,
      [playerOrder]: {
        stepsForward: currentPlayer.stepsForward + step,
        positionX: prevPositionX,
        positionY: prevPositionY,
      },
    });
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
      const step = convertRotateToSteps(sumRotate);
      movePlayer(step, playerOrder);
      setIsRoopStart(false);
    });
    setIsRoopStart(true);
    setRotate(sumRotate);
  };

  return {
    start,
  };
};
