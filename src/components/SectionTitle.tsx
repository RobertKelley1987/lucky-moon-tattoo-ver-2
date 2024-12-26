import React from "react";
import type { ReactNode } from "react";

type SectionTitleProps = {
  children: ReactNode;
};

function SectionTitle({ children }: SectionTitleProps) {
  return <h2 className="section-title">{children}</h2>;
}

export default SectionTitle;
