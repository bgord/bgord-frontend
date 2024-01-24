import { UseQueryResult } from "react-query";
import { UseToggleReturnType } from "./use-toggle";
export type UseDelayedLoaderConfig = Pick<UseQueryResult, "isLoading">;
export declare function useDelayedLoader(config: UseDelayedLoaderConfig, delayMs?: number): UseToggleReturnType;
