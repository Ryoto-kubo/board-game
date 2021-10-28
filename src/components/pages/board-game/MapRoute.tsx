import { Tile } from "@/components/ui/Tile";
import { userMapRoute } from "@/customHooks/useMapRoute";
import MapRouteStyle from "@/styles/components/pages/board-game/MapRoute.module.scss";
import { v4 as uuidv4 } from "uuid";

export const MapRoute = () => {
  const { mappingPositionForEach } = userMapRoute();
  const tileList = mappingPositionForEach();

  return (
    <div className={MapRouteStyle.root}>
      {tileList.map((el) => (
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
  );
};
