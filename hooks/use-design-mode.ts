import { useEffect, useCallback, useMemo } from "react";
import { getSafeWindow } from "../safe-window";
import {
  UseToggleConfigType,
  UseToggleReturnType,
  useToggle,
} from "./use-toggle";

/**
 * Hook to toggle document design mode with safety checks
 *
 * @description
 * This hook provides a toggle control for the document's design mode,
 * allowing content to be edited directly in the browser. It includes
 * safety checks for window/document availability and proper cleanup.
 *
 * @example
 * ```tsx
 * function EditableContent() {
 *   const designMode = useDesignMode({ name: "content-edit-mode" });
 *
 *   return (
 *     <div>
 *       <button onClick={designMode.toggle}>
 *         {designMode.on ? "Exit Edit Mode" : "Enter Edit Mode"}
 *       </button>
 *       <div>
 *         This content will be editable when design mode is on
 *       </div>
 *     </div>
 *   );
 * }
 * ```
 *
 * @example
 * ```tsx
 * function AdminPanel() {
 *   const editMode = useDesignMode({
 *     name: "admin-edit-mode",
 *     defaultValue: true,
 *   });
 *
 *   return (
 *     <div>
 *       <h1>Admin Panel</h1>
 *       <label>
 *         <input
 *           type="checkbox"
 *           checked={editMode.on}
 *           onChange={editMode.toggle}
 *         />
 *         Enable Editing
 *       </label>
 *     </div>
 *   );
 * }
 * ```
 *
 * @param config - Configuration object for the toggle state
 * @returns Toggle state and controls for design mode
 */
export function useDesignMode(
  config: UseToggleConfigType
): UseToggleReturnType {
  // Initialize toggle state
  const designMode = useToggle(config);

  // Memoize window access to prevent unnecessary checks
  const safeWindow = useMemo(() => getSafeWindow(), []);

  // Memoize design mode update callback
  const updateDesignMode = useCallback(
    (isOn: boolean) => {
      if (!safeWindow) return;
      safeWindow.document.designMode = isOn ? "on" : "off";
    },
    [safeWindow]
  );

  // Effect to manage design mode state
  useEffect(() => {
    updateDesignMode(designMode.on);

    // Cleanup: turn off design mode when unmounting
    return () => updateDesignMode(false);
  }, [designMode.on, updateDesignMode]);

  return designMode;
}
