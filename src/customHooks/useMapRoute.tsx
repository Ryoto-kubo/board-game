export const userMapRoute = () => {
  type TileListType = {
    label: string;
    nextTile: "top" | "bottom" | "right" | "";
    positionY: number;
    positionX: number;
  }[];

  let currentTilePositionY = 0;
  let currentTilePositionX = 0;

  const BASE_TILE_SIZE = 110;
  const BASE_MARGIN_SIZE = 8;
  const tileList: TileListType = [
    {
      label: "start0",
      nextTile: "bottom",
      positionY: 110,
      positionX: 0,
    },
    {
      label: "start1",
      nextTile: "bottom",
      positionY: 110,
      positionX: 0,
    },
    {
      label: "start2",
      nextTile: "right",
      positionY: 110,
      positionX: 0,
    },
    {
      label: "start3",
      nextTile: "right",
      positionY: 110,
      positionX: 0,
    },
    {
      label: "start4",
      nextTile: "top",
      positionY: 110,
      positionX: 0,
    },
    {
      label: "start5",
      nextTile: "right",
      positionY: 110,
      positionX: 0,
    },
    {
      label: "start2",
      nextTile: "right",
      positionY: 110,
      positionX: 0,
    },
    {
      label: "start3",
      nextTile: "right",
      positionY: 110,
      positionX: 0,
    },
    {
      label: "start4",
      nextTile: "bottom",
      positionY: 110,
      positionX: 0,
    },
    {
      label: "start4",
      nextTile: "bottom",
      positionY: 110,
      positionX: 0,
    },
    {
      label: "start4",
      nextTile: "bottom",
      positionY: 110,
      positionX: 0,
    },
    {
      label: "start4",
      nextTile: "right",
      positionY: 110,
      positionX: 0,
    },
    {
      label: "start4",
      nextTile: "right",
      positionY: 110,
      positionX: 0,
    },
    {
      label: "start4",
      nextTile: "top",
      positionY: 110,
      positionX: 0,
    },
    {
      label: "start4",
      nextTile: "top",
      positionY: 110,
      positionX: 0,
    },
    {
      label: "start4",
      nextTile: "top",
      positionY: 110,
      positionX: 0,
    },
    {
      label: "start4",
      nextTile: "right",
      positionY: 110,
      positionX: 0,
    },
    {
      label: "start4",
      nextTile: "right",
      positionY: 110,
      positionX: 0,
    },
    {
      label: "start4",
      nextTile: "right",
      positionY: 110,
      positionX: 0,
    },
    {
      label: "Goal",
      nextTile: "",
      positionY: 110,
      positionX: 0,
    },
  ];

  const calcPositionY = (nextTile: string, currentTilePositionY: number) => {
    if (nextTile === "right") {
      return {
        positionY: currentTilePositionY,
        updateCurrentTilePositionY: currentTilePositionY,
      };
    } else if (nextTile === "top") {
      return {
        positionY: currentTilePositionY,
        updateCurrentTilePositionY:
          currentTilePositionY - BASE_TILE_SIZE - BASE_MARGIN_SIZE,
      };
    } else {
      return {
        positionY: currentTilePositionY,
        updateCurrentTilePositionY:
          currentTilePositionY + BASE_TILE_SIZE + BASE_MARGIN_SIZE,
      };
    }
  };

  const calcPositionX = (nextTile: string, currentTilePositionX: number) => {
    if (nextTile === "bottom") {
      return {
        positionX: currentTilePositionX,
        updateCurrentTilePositionX: currentTilePositionX,
      };
    } else if (nextTile === "top") {
      return {
        positionX: currentTilePositionX,
        updateCurrentTilePositionX: currentTilePositionX,
      };
    } else {
      return {
        positionX: currentTilePositionX,
        updateCurrentTilePositionX:
          currentTilePositionX + BASE_TILE_SIZE + BASE_MARGIN_SIZE,
      };
    }
  };

  const mappingPositionForEach = () => {
    tileList.forEach((item) => {
      const { positionY, updateCurrentTilePositionY } = calcPositionY(
        item.nextTile,
        currentTilePositionY
      );
      const { positionX, updateCurrentTilePositionX } = calcPositionX(
        item.nextTile,
        currentTilePositionX
      );
      item.positionY = positionY;
      item.positionX = positionX;
      currentTilePositionY = updateCurrentTilePositionY;
      currentTilePositionX = updateCurrentTilePositionX;
    });
    return tileList;
  };

  return { mappingPositionForEach };
};
