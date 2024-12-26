import React, { createContext, useState } from "react";
import type { Dispatch, ReactNode, SetStateAction } from "react";
import type { TattooNode } from "../types";

type TattooContextType = {
  selectedTattoo: TattooNode | null;
  setSelectedTattoo: Dispatch<SetStateAction<TattooNode | null>>;
};

export const TattooContext = createContext<TattooContextType | null>(null);

type TattooContextProviderProps = {
  children: ReactNode;
};

export default function TattooContextProvider({
  children,
}: TattooContextProviderProps) {
  const [selectedTattoo, setSelectedTattoo] = useState<TattooNode | null>(null);

  return (
    <TattooContext.Provider value={{ selectedTattoo, setSelectedTattoo }}>
      {children}
    </TattooContext.Provider>
  );
}
