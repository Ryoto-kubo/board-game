import { PlayerOrderType, PlayerStateType } from "@/types/pages/board-game";
import { useState } from "react";

export const useBoardGame = () => {
  const [playerOrder, setplayerOrder] = useState<PlayerOrderType>("player1");
  const [playerState, setPlayerState] = useState<PlayerStateType>({
    player1: {
      stepsForward: 0,
      positionX: 0,
      positionY: 0,
    },
    player2: {
      stepsForward: 0,
      positionX: 0,
      positionY: 0,
    },
  });

  return {
    playerOrder,
    setplayerOrder,
    playerState,
    setPlayerState,
  };
};
