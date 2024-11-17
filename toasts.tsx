import React, { createContext, useContext, useCallback, useMemo } from "react";
import { useList } from "./hooks/use-list";

/**
 * Configuration options for the ToastsContextProvider
 * @property {number} [timeout] - Duration in milliseconds before a toast automatically dismisses (default: 5000ms)
 */
export type ToastsConfigType = {
  timeout?: number;
};

/**
 * Base type for toast notifications
 * All custom toast types must extend this interface
 * @property {string} id - Unique identifier for the toast
 * @property {string} message - Content of the toast message
 */
export type BaseToastType = {
  readonly id: string;
  readonly message: string;
};

/**
 * Actions available for managing toasts
 * @property {function} add - Adds a new toast
 * @property {function} remove - Removes a specific toast
 * @property {function} clear - Removes all toasts
 */
type ToastActions = Readonly<{
  add: (toast: Omit<BaseToastType, "id">) => void;
  remove: (toast: BaseToastType) => void;
  clear: VoidFunction;
}>;

/**
 * Context data type containing toasts array and actions
 * First element is the readonly array of toasts
 * Second element is the readonly object of actions
 */
type ToastsContextDataType<ToastType extends BaseToastType = BaseToastType> = readonly [
  ReadonlyArray<ToastType>,
  ToastActions,
];

/**
 * React Context for the toast system
 * @internal
 */
const ToastsContext = createContext<ToastsContextDataType | undefined>(undefined);

/**
 * Provider component for the toast notification system
 * Manages toast state and provides methods for toast manipulation
 *
 * @param props - Provider props
 * @param props.children - React children to be wrapped
 * @param [props.timeout=5000] - Duration in milliseconds before toasts auto-dismiss
 *
 * @example
 * ```tsx
 * function App() {
 *   return (
 *     <ToastsContextProvider timeout={3000}>
 *       <MyApp />
 *     </ToastsContextProvider>
 *   );
 * }
 * ```
 */
export function ToastsContextProvider(
  props: {
    readonly children: JSX.Element | JSX.Element[];
  } & ToastsConfigType,
) {
  /**
   * Internal hook for toast state management
   * @internal
   */
  function useToastsImplementation(): ToastsContextDataType {
    const timeout = props?.timeout ?? 5000;
    const [toasts, listActions] = useList<BaseToastType>({
      comparisonFn: (a, b) => a.id === b.id,
    });

    // Optimized remove callback
    const remove = useCallback(
      (toast: BaseToastType) => {
        listActions.remove(toast);
      },
      [listActions],
    );

    // Optimized add callback
    const add = useCallback(
      (payload: Omit<BaseToastType, "id">) => {
        const id = String(Date.now());
        const toast = { ...payload, id } as const; // Make the new toast readonly
        listActions.add(toast);
        setTimeout(() => remove(toast), timeout);
      },
      [listActions, timeout, remove],
    );

    const clear = useCallback(() => {
      listActions.clear();
    }, [listActions]);

    const actions = useMemo(
      () => ({
        add,
        remove,
        clear,
      }),
      [add, remove, clear],
    );

    const reversedToasts = useMemo(() => toasts.slice().reverse() as ReadonlyArray<BaseToastType>, [toasts]);

    return useMemo(() => [reversedToasts, actions] as const, [reversedToasts, actions]);
  }

  const contextValue = useToastsImplementation();

  return <ToastsContext.Provider value={contextValue}>{props.children}</ToastsContext.Provider>;
}

/**
 * Hook to access toast state and actions within components
 * Must be used within a ToastsContextProvider
 *
 * @template ToastType - Custom toast type extending BaseToastType
 * @throws {Error} When used outside of ToastsContextProvider
 * @returns {[ReadonlyArray<ToastType>, ToastActions]} Tuple containing toasts array and actions
 *
 * @example
 * ```tsx
 * function ToastList() {
 *   const [toasts, { remove }] = useToastsContext();
 *
 *   return (
 *     <ul>
 *       {toasts.map(toast => (
 *         <li key={toast.id} onClick={() => remove(toast)}>
 *           {toast.message}
 *         </li>
 *       ))}
 *     </ul>
 *   );
 * }
 * ```
 */
export function useToastsContext<
  ToastType extends BaseToastType = BaseToastType,
>(): ToastsContextDataType<ToastType> {
  const context = useContext<ToastsContextDataType<ToastType>>(
    ToastsContext as unknown as React.Context<ToastsContextDataType<ToastType>>,
  );

  if (context === undefined) {
    throw new Error("useToasts must be used within the ToastsContextProvider");
  }

  return context;
}

/**
 * Hook to access only the add function for creating toasts
 * Useful when you only need to trigger toasts without managing them
 *
 * @template ToastType - Custom toast type extending BaseToastType
 * @returns {(toast: Omit<ToastType, "id">) => void} Function to add new toasts
 *
 * @example
 * ```tsx
 * function SubmitButton() {
 *   const addToast = useToastTrigger();
 *
 *   const handleClick = () => {
 *     // Do something...
 *     addToast({ message: "Operation successful!" });
 *   };
 *
 *   return <button onClick={handleClick}>Submit</button>;
 * }
 * ```
 *
 * @example Example with custom toast type
 * ```tsx
 * type CustomToast = BaseToastType & { severity: 'info' | 'error' };
 *
 * function ErrorButton() {
 *   const addToast = useToastTrigger<CustomToast>();
 *
 *   return (
 *     <button onClick={() => addToast({
 *       message: "Error occurred",
 *       severity: "error"
 *     })}>
 *       Trigger Error
 *     </button>
 *   );
 * }
 * ```
 */
export function useToastTrigger<ToastType extends BaseToastType = BaseToastType>(): (
  toast: Omit<ToastType, "id">,
) => void {
  const [, actions] = useToastsContext<ToastType>();
  return actions.add;
}
