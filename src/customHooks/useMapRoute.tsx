import { TileListType } from "@/types/pages/board-game";
import { useEffect, useState } from "react";
let currentTilePositionY = 0;
let currentTilePositionX = 0;

const BASE_TILE_SIZE = 110;
const BASE_MARGIN_SIZE = 8;

export const userMapRoute = (list: TileListType) => {
  const [tileList, setTileList] = useState(list);

  const calcPositionX = (nextTile: string, currentTilePositionX: number) => {
    let positionX;
    let updateCurrentTilePositionX;
    switch (nextTile) {
      case "bottom":
      case "top":
        positionX = currentTilePositionX;
        updateCurrentTilePositionX = currentTilePositionX;
        break;
      default:
        positionX = currentTilePositionX;
        updateCurrentTilePositionX =
          currentTilePositionX + BASE_TILE_SIZE + BASE_MARGIN_SIZE;
    }
    return { positionX, updateCurrentTilePositionX };
  };

  const calcPositionY = (nextTile: string, currentTilePositionY: number) => {
    let positionY;
    let updateCurrentTilePositionY;
    switch (nextTile) {
      case "right":
        positionY = currentTilePositionY;
        updateCurrentTilePositionY = currentTilePositionY;
        break;
      case "top":
        positionY = currentTilePositionY;
        updateCurrentTilePositionY =
          currentTilePositionY - BASE_TILE_SIZE - BASE_MARGIN_SIZE;
        break;
      default:
        positionY = currentTilePositionY;
        updateCurrentTilePositionY =
          currentTilePositionY + BASE_TILE_SIZE + BASE_MARGIN_SIZE;
    }
    return {
      positionY,
      updateCurrentTilePositionY,
    };
  };

  const mappingPositionForEach = () => {
    tileList.forEach((item, index) => {
      const { positionY, updateCurrentTilePositionY } = calcPositionY(
        item.nextTile,
        currentTilePositionY
      );
      const { positionX, updateCurrentTilePositionX } = calcPositionX(
        item.nextTile,
        currentTilePositionX
      );
      const newTileList = tileList.slice();
      newTileList[index].positionY = positionY;
      newTileList[index].positionX = positionX;
      setTileList(newTileList);
      currentTilePositionY = updateCurrentTilePositionY;
      currentTilePositionX = updateCurrentTilePositionX;
    });
  };

  useEffect(() => {
    mappingPositionForEach();
  }, []);

  return tileList;
};
