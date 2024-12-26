import React, { createContext, useEffect, useState } from "react";
import type { Dispatch, ReactNode, SetStateAction } from "react";
import { useScreenSize } from "../hooks/useScreenSize";

type MenuState = "menu" | "artists" | "closed";

type MenuContextType = {
  menuState: MenuState;
  setMenuState: Dispatch<SetStateAction<MenuState>>;
};

export const MenuContext = createContext<MenuContextType | null>(null);

type MenuContextProviderProps = {
  children: ReactNode;
};

function MenuContextProvider({ children }: MenuContextProviderProps) {
  const [menuState, setMenuState] = useState<MenuState>("closed");
  const { isSmall } = useScreenSize("767px");

  useEffect(() => {
    if (!isSmall) setMenuState("closed");
  }, [isSmall]);

  return (
    <MenuContext.Provider value={{ menuState, setMenuState }}>
      {children}
    </MenuContext.Provider>
  );
}

export default MenuContextProvider;
