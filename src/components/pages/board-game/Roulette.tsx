import { BaseRoulette } from "@/components/ui/BaseRoulette";
import { Button } from "@/components/ui/Button";
import { useRoulette } from "@/customHooks/useRoulette";
import RouletteStyle from "@/styles/components/pages/board-game/Roulette.module.scss";

export const Roulette = () => {
  const { isRoop, rotate, start, hideAfter5Sec } = useRoulette();
  return (
    <div className={RouletteStyle.root}>
      {isRoop && (
        <BaseRoulette
          isRoop={isRoop}
          rotate={rotate}
          hideAfter5Sec={hideAfter5Sec}
        />
      )}
      <div className={RouletteStyle.buttonWrapper}>
        <Button
          text="ルーレットを回す"
          mainClassName="root"
          fontClassName="fontMiddle"
          onClick={start}
        />
      </div>
    </div>
  );
};
