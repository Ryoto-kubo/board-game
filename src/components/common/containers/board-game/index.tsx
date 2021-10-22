import ContainerStyle from "@/styles/components/common/containers/board-game/style.module.scss";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const BoardGameContainer = ({ children }: Props) => {
  return <div className={ContainerStyle.root}>{children}</div>;
};
