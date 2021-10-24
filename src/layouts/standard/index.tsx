import { TheHead } from "@/components/common/head";
import LayoutStyle from "@/styles/layouts/standard/style.module.scss";
import React, { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  title: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div>
    <TheHead title={title} />
    <main className={LayoutStyle.root}>{children}</main>
  </div>
);

export default Layout;
