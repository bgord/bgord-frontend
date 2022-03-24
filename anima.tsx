import React from "react";

import { usePreviousValue } from "./hooks/use-previous-value";

export enum AnimaState {
  appearing = "appearing",
  appeared = "appeared",
  hidding = "hidding",
  hidden = "hidden",
}

export type AnimaEffectType = string;

export type AnimaConfigType = {
  children: JSX.Element;

  visible: boolean;
  effect: AnimaEffectType;

  duration?: number;
  isInitial?: boolean;
};

export function Anima(props: AnimaConfigType) {
  const duration = props.duration ?? 300;

  function getInitialState() {
    if (!props.visible) return AnimaState.hidden;
    if (props.isInitial) return AnimaState.appeared;
    return AnimaState.appearing;
  }

  const [state, setState] = React.useState<AnimaState>(getInitialState);
  const previousState = usePreviousValue(state);

  React.useEffect(() => {
    if (props.isInitial) return;

    if (props.visible) {
      setState(AnimaState.appearing);
      setTimeout(() => setState(AnimaState.appeared), 100);
    } else {
      if (!previousState) return;
      setState(AnimaState.hidding);
      setTimeout(() => setState(AnimaState.hidden), duration);
    }
  }, [props.visible]);

  if (state === AnimaState.hidden) return null;

  return React.cloneElement(props.children, {
    "data-anima": state,
    "data-anima-effect": props.effect,
    style: { "--duration": `${duration}ms`, ...props.children.props.style },
  });
}

export function getAnimaProps(props: Record<string, any>) {
  return {
    "data-anima": props["data-anima"] as AnimaState | undefined,
    "data-anima-effect": props["data-anima-effect"] as
      | AnimaEffectType
      | undefined,
    style: props.style as React.CSSProperties,
  };
}

export type AnimaListPropsType = {
  children: JSX.Element[];
} & JSX.IntrinsicElements["ul"];

export function AnimaList(props: AnimaListPropsType) {
  const { children, ...rest } = props;

  const [isInitial, setIsInitial] = React.useState<boolean>(true);

  React.useEffect(() => setIsInitial(false), []);

  return (
    <ul {...rest}>
      {props.children.map((child) => React.cloneElement(child, { isInitial }))}
    </ul>
  );
}

export type UseAnimaListDirectionType = "head" | "tail";

export type UseAnimaListConfigType = {
  direction?: UseAnimaListDirectionType;
  duration?: number;
};

type UseAnimaListItemType<T> = { item: T; props: { visible: boolean } };

type UseAnimaListReturnType<T> = {
  items: { item: T; props: { visible: boolean } }[];
  count: number;
};

export function useAnimaList<T extends { id: string }>(
  list: T[],
  config?: UseAnimaListConfigType
): UseAnimaListReturnType<T> {
  const duration = config?.duration ?? 300;
  const direction = config?.direction ?? "head";

  const [officialList, setOfficialList] = React.useState<
    UseAnimaListItemType<T>[]
  >(list.map((item) => ({ item, props: { visible: true } })));

  let added: T[] = [];

  for (const item of list) {
    const wasAdded = !officialList
      .map((x) => x.item)
      .some((x) => item.id === x.id);

    if (wasAdded) added.push(item);
  }

  React.useEffect(() => {
    if (added.length === 0) return;

    if (direction === "head") {
      setOfficialList((officialList) => [
        ...added.map((item) => ({ item, props: { visible: true } })),
        ...officialList,
      ]);
    } else {
      setOfficialList((officialList) => [
        ...officialList,
        ...added.map((item) => ({ item, props: { visible: true } })),
      ]);
    }

    added = [];
  }, [added.length, direction]);

  let deleted: T[] = [];

  for (const { item } of officialList) {
    const wasDeleted = list.every((x) => x.id !== item.id);

    if (wasDeleted) deleted.push(item);
  }

  React.useEffect(() => {
    if (deleted.length === 0) return;

    setOfficialList((officialList) =>
      officialList.map((x) => {
        const wasDeleted = deleted.some((item) => item.id === x.item.id);

        return wasDeleted ? { ...x, props: { visible: false } } : x;
      })
    );

    setTimeout(
      () =>
        setOfficialList(
          list.map((item) => ({ item, props: { visible: true } }))
        ),
      duration + 25 // 25 ms buffer
    );

    deleted = [];
  }, [deleted.length]);

  return {
    items: officialList.map((item) => {
      const updated = list.find((y) => y.id === item.item.id);
      return updated ? { ...item, item: updated } : item;
    }),
    count: officialList.filter((x) => x.props.visible).length,
  };
}
