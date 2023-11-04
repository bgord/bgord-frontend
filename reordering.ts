import React from "react";

type ReorderingBaseItemType = { id: string };
type ReorderingIndexType = number;
type ReorderingCorrelationIdType = string;

export type ReorderingTransferType<
  T extends ReorderingBaseItemType = ReorderingBaseItemType
> = {
  correlationId: ReorderingCorrelationIdType;
  id: T["id"];
  item: T;
  to: ReorderingIndexType;
};

export type UseReorderingConfigType<
  T extends ReorderingBaseItemType = ReorderingBaseItemType
> = {
  correlationId: ReorderingCorrelationIdType;
  initialItems: T[];
  callback: (transfer: ReorderingTransferType<T>) => void;
  enabled?: boolean;
};

export type UseReorderingReturnType<
  T extends ReorderingBaseItemType = ReorderingBaseItemType
> = {
  items: T[];
  enabled: boolean;
  props: {
    item: (index: ReorderingIndexType) => {
      onDragOver: (event: React.DragEvent<HTMLElement>) => void;
    };
    handle: (index: ReorderingIndexType) => {
      onDragStart: (event: React.DragEvent<HTMLElement>) => void;
      onDragEnd: (event: React.DragEvent<HTMLElement>) => void;
      draggable: UseReorderingConfigType<T>["enabled"];
    };
  };
};

export function useReordering<
  T extends ReorderingBaseItemType = ReorderingBaseItemType
>(config: UseReorderingConfigType<T>): UseReorderingReturnType<T> {
  const enabled = config.enabled ?? true;

  const [items, setItems] = React.useState<T[]>(config.initialItems);
  React.useEffect(
    () => setItems(config.initialItems),
    [JSON.stringify(config.initialItems)]
  );

  const draggedItem = React.useRef<T | null>(null);
  const [toIndex, setToIndex] = React.useState<ReorderingIndexType | null>(
    null
  );

  function onDragStartFactory(index: ReorderingIndexType) {
    return function onDragStart(event: React.DragEvent<HTMLElement>) {
      draggedItem.current = items[index] ?? null;

      if (!event?.dataTransfer || event.currentTarget.parentNode) return;

      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData(
        "text/html",
        event.currentTarget.parentNode as unknown as string
      );
      event.dataTransfer.setDragImage(
        event.currentTarget.parentNode as unknown as Element,
        20,
        20
      );
    };
  }

  function onDragOverFactory(index: ReorderingIndexType) {
    return function onDragOver(event: React.DragEvent<HTMLElement>) {
      event.preventDefault();

      const draggedOverItem = items[index];
      setToIndex(index);

      // if the item is dragged over itself, ignore
      if (draggedItem.current === draggedOverItem || !draggedItem.current) {
        return;
      }

      // filter out the currently dragged item
      let updated = items.filter((item) => item !== draggedItem.current);

      // add the dragged item after the dragged over item
      updated.splice(index, 0, draggedItem.current);

      setItems(updated);
    };
  }

  function onDragEndFactory(index: ReorderingIndexType) {
    return function onDragEnd(_event: React.DragEvent<HTMLElement>) {
      draggedItem.current = null;
      setToIndex(null);
      config.callback({
        correlationId: config.correlationId,
        id: items[index]?.id as T["id"],
        item: items[index] as T,
        to: toIndex as ReorderingIndexType,
      });
    };
  }

  const cursor = enabled ? (draggedItem.current ? "grabbing" : "grab") : "auto";

  return {
    items,
    enabled,
    props: {
      item: (index: ReorderingIndexType) => ({
        onDragOver: onDragOverFactory(index),
      }),
      handle: (index: ReorderingIndexType) => ({
        onDragStart: onDragStartFactory(index),
        onDragEnd: onDragEndFactory(index),
        draggable: enabled,
        style: { cursor },
      }),
    },
  };
}
