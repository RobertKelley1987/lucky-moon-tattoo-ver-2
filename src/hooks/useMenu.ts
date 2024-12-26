import { useContext } from "react";
import { MenuContext } from "../context/MenuContext";

// Hook to confirm menu state context is only used in children of MenuContext.Provider.
export function useMenu() {
  const menuContext = useContext(MenuContext);
  if (!menuContext) {
    throw Error(
      "Menu context can only be used in child components of MenuContext.Provider."
    );
  }

  return menuContext;
}
