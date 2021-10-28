import { BaseRoulette } from "@/components/ui/BaseRoulette";
// import { Modal } from "@/components/ui/Modal";
import { useRoulette } from "@/customHooks/useRoulette";
import RouletteStyle from "@/styles/components/pages/board-game/Roulette.module.scss";
import {
  PlayerOrderType,
  PlayerStateType,
  TileListType,
} from "@/types/pages/board-game";
import { Dispatch, SetStateAction } from "react";

type Props = {
  playerOrder: PlayerOrderType;
  playerState: PlayerStateType;
  setPlayerState: Dispatch<SetStateAction<PlayerStateType>>;
  tileList: TileListType;
};

export const Roulette = ({
  tileList,
  playerOrder,
  playerState,
  setPlayerState,
}: Props) => {
  const { start } = useRoulette(
    playerOrder,
    playerState,
    setPlayerState,
    tileList
  );

  return (
    <div className={RouletteStyle.root}>
      <div className={RouletteStyle.rouletteWrapper}>
        <BaseRoulette start={start} />
      </div>
    </div>
  );
};
