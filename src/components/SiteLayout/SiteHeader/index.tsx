import React from "react";
import { useClickOutside } from "../../../hooks/useClickOutside";
import { useMenu } from "../../../hooks/useMenu";
import Logo from "./Logo";
import ArtistDropdown from "./ArtistDropdown";
import MenuButton from "./MenuButton";
import Nav from "./Nav";

type SiteHeaderProps = {
  path?: string;
};

function SiteHeader({ path }: SiteHeaderProps) {
  const { wrapperRef } = useClickOutside();
  const { menuState } = useMenu();
  const dropdownOpen = menuState !== "closed";

  // Make background transparent if menu is closed. Otherwise set to black.
  const bg = dropdownOpen ? "header-opaque" : "header-transparent";

  return (
    <header ref={wrapperRef} className={`header ${bg}`}>
      <div className="header-content">
        <Logo />
        <Nav />
        <MenuButton />
      </div>
      {menuState === "artists" && <ArtistDropdown path={path} />}
    </header>
  );
}

export default SiteHeader;
