import { BoardGameContainer } from "@/components/common/containers/board-game";
import { MapRoute } from "@/components/pages/board-game/MapRoute";
import { Roulette } from "@/components/pages/board-game/Roulette";
import { Score } from "@/components/pages/board-game/Score";
import { useBoardGame } from "@/customHooks/useBoardGame";
import Layout from "@/layouts/standard";
import BoardGameStyle from "@/styles/pages/board-game/style.module.scss";
import { TileListType } from "@/types/pages/board-game";

const tileList: TileListType = [
  {
    label: "Start",
    nextTile: "bottom",
    positionY: 0,
    positionX: 0,
  },
  {
    label: "start1",
    nextTile: "bottom",
    positionY: 0,
    positionX: 0,
  },
  {
    label: "start2",
    nextTile: "right",
    positionY: 0,
    positionX: 0,
  },
  {
    label: "start3",
    nextTile: "right",
    positionY: 0,
    positionX: 0,
  },
  {
    label: "start4",
    nextTile: "top",
    positionY: 0,
    positionX: 0,
  },
  {
    label: "start5",
    nextTile: "right",
    positionY: 0,
    positionX: 0,
  },
  {
    label: "start2",
    nextTile: "right",
    positionY: 0,
    positionX: 0,
  },
  {
    label: "start3",
    nextTile: "right",
    positionY: 0,
    positionX: 0,
  },
  {
    label: "start4",
    nextTile: "bottom",
    positionY: 0,
    positionX: 0,
  },
  {
    label: "start4",
    nextTile: "bottom",
    positionY: 0,
    positionX: 0,
  },
  {
    label: "start4",
    nextTile: "bottom",
    positionY: 0,
    positionX: 0,
  },
  {
    label: "start4",
    nextTile: "right",
    positionY: 0,
    positionX: 0,
  },
  {
    label: "start4",
    nextTile: "right",
    positionY: 0,
    positionX: 0,
  },
  {
    label: "start4",
    nextTile: "top",
    positionY: 0,
    positionX: 0,
  },
  {
    label: "start4",
    nextTile: "top",
    positionY: 0,
    positionX: 0,
  },
  {
    label: "start4",
    nextTile: "top",
    positionY: 0,
    positionX: 0,
  },
  {
    label: "start4",
    nextTile: "right",
    positionY: 0,
    positionX: 0,
  },
  {
    label: "start4",
    nextTile: "right",
    positionY: 0,
    positionX: 0,
  },
  {
    label: "start4",
    nextTile: "right",
    positionY: 0,
    positionX: 0,
  },
  {
    label: "Goal",
    nextTile: "",
    positionY: 0,
    positionX: 0,
  },
];

const IndexPage = () => {
  const { playerOrder, playerState, setPlayerState } = useBoardGame();

  return (
    <Layout title="board-game | Next.js + TypeScript">
      <BoardGameContainer>
        <Score />
        <Roulette
          tileList={tileList}
          playerOrder={playerOrder}
          playerState={playerState}
          setPlayerState={setPlayerState}
        />
        <div className={BoardGameStyle.mapRouteWrapper}>
          <MapRoute tileList={tileList} />
        </div>
      </BoardGameContainer>
    </Layout>
  );
};

export default IndexPage;
