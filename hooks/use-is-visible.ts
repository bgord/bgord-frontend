import { RefObject, useEffect, useState } from "react";

export const defaultUseIsVisibleConfig = {
  threshold: 0,
  root: null,
  rootMargin: "0%",
  ref: { current: null },
};

export function isIntersectionObserverSupported() {
  return (
    "IntersectionObserver" in window &&
    "IntersectionObserverEntry" in window &&
    "intersectionRatio" in window.IntersectionObserverEntry.prototype
  );
}

export type UseIsVisibleConfigType = IntersectionObserverInit & {
  ref: RefObject<Element>;
};

export type UseIsVisibleReturnType = boolean;

export function useIsVisible(
  config: UseIsVisibleConfigType = defaultUseIsVisibleConfig
): UseIsVisibleReturnType {
  const [isVisible, setVisible] = useState<UseIsVisibleReturnType>(false);

  useEffect(() => {
    const element = config.ref.current;

    if (!(isIntersectionObserverSupported() && element)) return;

    const observer = new IntersectionObserver(
      (entry) => setVisible(Boolean(entry[0]?.isIntersecting)),
      config
    );

    observer.observe(element);

    return () => observer.unobserve(element);
  }, []);

  return isVisible;
}
