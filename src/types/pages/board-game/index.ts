export type TileListType = {
  label: string;
  nextTile: "top" | "bottom" | "right" | "";
  positionY: number;
  positionX: number;
}[];

export type PlayerOrderType = "player1" | "player2";

export type PlayerStateType = {
  [key in PlayerOrderType]: {
    stepsForward: number;
    positionX: number;
    positionY: number;
  };
};
