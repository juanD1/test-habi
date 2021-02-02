import React, { ReactNode } from "react";
import Header from "components/common/Header";

type Props = {
  children: ReactNode | ReactNode[];
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
