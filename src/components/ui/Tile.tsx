import TileStyle from "@/styles/components/ui/Tile.module.scss";

type Props = {
  id?: string;
  label: string;
  nextTile: "top" | "bottom" | "right" | "";
};

export const Tile = ({ id, label, nextTile }: Props) => {
  return (
    <div id={id} className={`${TileStyle.tile} ${TileStyle[nextTile]}`}>
      <div className={TileStyle.labelWrapper}>{label}</div>
    </div>
  );
};
