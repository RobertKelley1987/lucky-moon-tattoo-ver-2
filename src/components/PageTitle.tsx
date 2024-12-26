import React from "react";
import type { ReactNode } from "react";

type PageTitleProps = {
  children: ReactNode;
};

function PageTitle({ children }: PageTitleProps) {
  return <h1 className="page-title">{children}</h1>;
}

export default PageTitle;
