import { useContext } from "react";
import { TattooContext } from "../context/TattooContext";

// Hook to confirm tattoo context is only accessed within appropriate context provider.
export function useTattoo() {
  const tattooContext = useContext(TattooContext);
  if (!tattooContext) {
    throw Error(
      "Tattoo context must be accessed from a child of TattooContext.Provider."
    );
  }

  return tattooContext;
}
