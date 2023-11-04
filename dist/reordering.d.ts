import React from "react";
declare type ReorderingBaseItemType = {
    id: string;
};
declare type ReorderingIndexType = number;
declare type ReorderingCorrelationIdType = string;
export declare type ReorderingTransferType<T extends ReorderingBaseItemType = ReorderingBaseItemType> = {
    correlationId: ReorderingCorrelationIdType;
    id: T["id"];
    item: T;
    to: ReorderingIndexType;
};
export declare type UseReorderingConfigType<T extends ReorderingBaseItemType = ReorderingBaseItemType> = {
    correlationId: ReorderingCorrelationIdType;
    initialItems: T[];
    callback: (transfer: ReorderingTransferType<T>) => void;
    enabled?: boolean;
};
export declare type UseReorderingReturnType<T extends ReorderingBaseItemType = ReorderingBaseItemType> = {
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
export declare function useReordering<T extends ReorderingBaseItemType = ReorderingBaseItemType>(config: UseReorderingConfigType<T>): UseReorderingReturnType<T>;
export {};
