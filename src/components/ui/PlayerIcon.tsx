import PlayerIconStyle from "@/styles/components/ui/PlayerIcon.module.scss";

type Props = {
  playerClassName: "player1" | "player2";
};

export const PlayerIcon = ({ playerClassName }: Props) => {
  return (
    <div
      className={`${PlayerIconStyle.outer} ${PlayerIconStyle[playerClassName]}`}
    >
      <div className={PlayerIconStyle.inner}></div>
    </div>
  );
};
