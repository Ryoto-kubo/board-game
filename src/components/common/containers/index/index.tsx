import ContainerStyle from "@/styles/components/common/containers/index/style.module.scss";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const StandardContainer = ({ children }: Props) => {
  return <div className={ContainerStyle.root}>{children}</div>;
};
