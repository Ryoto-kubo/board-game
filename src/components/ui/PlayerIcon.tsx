import PlayerIconStyle from "@/styles/components/ui/PlayerIcon.module.scss";

type Props = {
  type: "player1" | "player2";
};

export const PlayerIcon = ({ type }: Props) => {
  return (
    <div
      id={type}
      className={`${PlayerIconStyle.outer} ${PlayerIconStyle[type]}`}
    >
      <div className={PlayerIconStyle.inner}></div>
    </div>
  );
};
