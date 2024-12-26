import { useEffect, useRef } from "react";
import { useMenu } from "./useMenu";
import { assertIsNode } from "../lib/assertions";

// Hook to close menu when user clicks outside of it.
export function useClickOutside() {
  const wrapperRef = useRef<HTMLElement>(null);
  const { setMenuState } = useMenu();

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      assertIsNode(e.target);
      if (wrapperRef.current?.contains(e.target)) return;
      setMenuState("closed");
    }

    document.body.addEventListener("click", handleClick);

    return () => document.body.removeEventListener("click", handleClick);
  }, []);

  return { wrapperRef };
}
