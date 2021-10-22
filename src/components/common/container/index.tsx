import ContainerStyle from "@/styles/components/common/container/style.module.scss";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const TheContainer = ({ children }: Props) => {
  return <div className={ContainerStyle.root}>{children}</div>;
};
