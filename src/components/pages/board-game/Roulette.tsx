import { BaseRoulette } from "@/components/ui/BaseRoulette";
import RouletteStyle from "@/styles/components/pages/board-game/Roulette.module.scss";
export const Roulette = () => {
  return (
    <div className={RouletteStyle.root}>
      <BaseRoulette />
    </div>
  );
};
