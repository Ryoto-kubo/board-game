import PressedBoxStyle from "@/styles/components/ui/PressedBox.module.scss";
import { ReactNode } from "react";
type Props = {
  children: ReactNode;
};

export const PressedBox = ({ children }: Props) => {
  return <div className={PressedBoxStyle.root}>{children}</div>;
};
