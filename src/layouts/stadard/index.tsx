import { TheHead } from "@/components/common/head";
import React, { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  title: string;
};
const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div>
    <TheHead title={title} />
    <main>{children}</main>
  </div>
);

export default Layout;
