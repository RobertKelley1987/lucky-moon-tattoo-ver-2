import React from "react";
import MenuContextProvider from "../../context/MenuContext";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";
import type { ReactNode } from "react";

type SiteLayoutProps = {
  children: ReactNode;
  path?: string;
};

function SiteLayout({ children, path }: SiteLayoutProps) {
  return (
    <div className="layout">
      <MenuContextProvider>
        <SiteHeader path={path} />
      </MenuContextProvider>
      {children}
      <SiteFooter />
    </div>
  );
}

export default SiteLayout;
