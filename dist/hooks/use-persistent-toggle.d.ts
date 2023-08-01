import { UseToggleReturnType, UseToggleValueType } from "./use-toggle";
import { SafeLocalStorageKeyType } from "../safe-local-storage";
export declare type UsePersistentToggleReturnType = UseToggleReturnType & {
    clear: VoidFunction;
};
export declare function usePersistentToggle(key: SafeLocalStorageKeyType, defaultValue?: UseToggleValueType): UsePersistentToggleReturnType;
