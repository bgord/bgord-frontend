import { UseToggleReturnType, UseToggleValueType } from "./use-toggle";
import { SafeLocalStorageKeyType } from "../safe-local-storage";
export declare function usePersistentToggle(key: SafeLocalStorageKeyType, defaultValue?: UseToggleValueType): UseToggleReturnType & {
    clear: VoidFunction;
};
