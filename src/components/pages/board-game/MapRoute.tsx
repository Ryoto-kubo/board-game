import { PlayerIcon } from "@/components/ui/PlayerIcon";
import { Tile } from "@/components/ui/Tile";
import { userMapRoute } from "@/customHooks/useMapRoute";
import MapRouteStyle from "@/styles/components/pages/board-game/MapRoute.module.scss";
import { TileListType } from "@/types/pages/board-game";
import { v4 as uuidv4 } from "uuid";

type Props = {
  tileList: TileListType;
};

export const MapRoute = ({ tileList }: Props) => {
  const mapperdTileList = userMapRoute(tileList);

  return (
    <>
      <div className={MapRouteStyle.root}>
        <PlayerIcon type="player1" />
        <PlayerIcon type="player2" />
        {mapperdTileList.map((el) => (
          <div
            key={uuidv4()}
            style={{
              position: "absolute",
              top: el.positionY,
              left: el.positionX,
            }}
          >
            <Tile label={el.label} nextTile={el.nextTile} />
          </div>
        ))}
      </div>
    </>
  );
};
