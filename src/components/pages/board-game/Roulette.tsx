import { BaseRoulette } from "@/components/ui/BaseRoulette";
// import { Modal } from "@/components/ui/Modal";
import { useRoulette } from "@/customHooks/useRoulette";
import RouletteStyle from "@/styles/components/pages/board-game/Roulette.module.scss";

export const Roulette = () => {
  const { start } = useRoulette();

  return (
    <div className={RouletteStyle.root}>
      <div className={RouletteStyle.rouletteWrapper}>
        <BaseRoulette start={start} />
      </div>
    </div>
  );
};
