import { useEffect, useState } from "react";

export function useScreenSize(size: string) {
  const [isLoading, setIsLoading] = useState(true);
  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    // Define query.
    const mediaQuery = window.matchMedia(`(max-width: ${size})`);

    // Define query change handler.
    function handleChange(e: MediaQueryListEvent) {
      setIsSmall(e.matches);
    }

    // Fire event handler when component using this hook first loads.
    setIsSmall(mediaQuery.matches);
    setIsLoading(false);

    // Add event listener in case of window resize.
    mediaQuery.addEventListener("change", handleChange);

    // Remove listener when component unmounts.
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return { isSmall, isLoading };
}
