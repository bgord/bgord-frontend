import { RefObject, useCallback, useEffect, useMemo, useState } from "react";

const defaultUseIsVisibleConfig = {
  threshold: 0,
  root: null,
  rootMargin: "0%",
  ref: { current: null },
} as const;

/**
 * Checks if IntersectionObserver is supported in current environment
 */
function isIntersectionObserverSupported() {
  return (
    typeof window !== "undefined" &&
    "IntersectionObserver" in window &&
    "IntersectionObserverEntry" in window &&
    "intersectionRatio" in window.IntersectionObserverEntry.prototype
  );
}

type UseIsVisibleConfigType = IntersectionObserverInit & {
  ref: RefObject<Element>;
};

type UseIsVisibleReturnType = boolean;

/**
 * Hook to track element visibility using IntersectionObserver
 *
 * @example
 * ```tsx
 * function LazyImage() {
 *   const ref = useRef<HTMLImageElement>(null);
 *   const isVisible = useIsVisible({ ref, threshold: 0.5 });
 *
 *   return (
 *     <img
 *       ref={ref}
 *       src={isVisible ? actualSrc : placeholderSrc}
 *       alt="Lazy loaded image"
 *     />
 *   );
 * }
 * ```
 */
export function useIsVisible(
  config: UseIsVisibleConfigType = defaultUseIsVisibleConfig,
): UseIsVisibleReturnType {
  const [isVisible, setVisible] = useState<UseIsVisibleReturnType>(false);

  // Memoize intersection observer callback
  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    setVisible(Boolean(entries[0]?.isIntersecting));
  }, []);

  // Memoize observer configuration
  const observerConfig = useMemo(
    () => ({
      threshold: config.threshold,
      root: config.root,
      rootMargin: config.rootMargin,
    }),
    [config.threshold, config.root, config.rootMargin],
  );

  useEffect(() => {
    const element = config.ref.current;

    if (!(isIntersectionObserverSupported() && element)) return;

    const observer = new IntersectionObserver(handleIntersection, observerConfig);
    observer.observe(element);

    return () => observer.disconnect();
  }, [config.ref, observerConfig, handleIntersection]);

  return isVisible;
}
