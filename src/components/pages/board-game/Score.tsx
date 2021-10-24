import { PressedBox } from "@/components/ui/PressedBox";
import ScoreStyle from "@/styles/components/pages/board-game/Score.module.scss";

export const Score = () => {
  return (
    <div className={ScoreStyle.root}>
      <div className={ScoreStyle.childWrapper}>
        <PressedBox>
          <ul className={`${ScoreStyle.ul} ${ScoreStyle.player1}`}>
            <li className={`${ScoreStyle.item} ${ScoreStyle.title}`}>
              PLAYER 1
            </li>
            <li className={`${ScoreStyle.item} ${ScoreStyle.moveLeft}`}>
              <span className={ScoreStyle.num}>24 </span>move(s) left
            </li>
            <li className={ScoreStyle.status}>Status -</li>
          </ul>
        </PressedBox>
      </div>
      <div className={ScoreStyle.childWrapper}>
        <PressedBox>
          <ul className={`${ScoreStyle.ul} ${ScoreStyle.player2}`}>
            <li className={`${ScoreStyle.item} ${ScoreStyle.title}`}>
              PLAYER 2
            </li>
            <li className={`${ScoreStyle.item} ${ScoreStyle.moveLeft}`}>
              <span className={ScoreStyle.num}>24 </span>move(s) left
            </li>
            <li className={ScoreStyle.status}>Status -</li>
          </ul>
        </PressedBox>
      </div>
    </div>
  );
};
