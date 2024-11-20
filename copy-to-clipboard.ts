import { noop } from "./noop";

type CopyToClipboardTextType = string;
type OnCopyToClipboardFailureType = (error?: unknown) => void;
type OnCopyToClipboardSuccessType = VoidFunction;

const defaultOnCopyToClipboardFailure: OnCopyToClipboardFailureType = () =>
  console.warn("Copying to clipboard not supported");

export type CopyToClipboardOptionsType = {
  text: CopyToClipboardTextType;
  onFailure?: OnCopyToClipboardFailureType;
  onSuccess?: OnCopyToClipboardSuccessType;
};

/**
 * Copies text to the system clipboard using the Clipboard API.
 *
 * @remarks
 * This function requires browser support for the Clipboard API.
 * Due to security restrictions, it may only work in secure contexts (HTTPS).
 *
 * @param options - Configuration object
 * @param options.text - The text to copy to clipboard
 * @param options.onSuccess - Optional callback when copy succeeds
 * @param options.onFailure - Optional callback when copy fails
 *
 * @returns Promise<void> Resolves when copy completes, rejects on failure
 *
 * @example
 * ```typescript
 * await copyToClipboard({
 *   text: 'Hello World',
 *   onSuccess: () => console.log('Copied!'),
 *   onFailure: (error) => console.error('Copy failed:', error)
 * });
 * ```
 *
 * @throws {Error} When Clipboard API is not available
 * @throws {Error} When permission is denied
 */
export async function copyToClipboard(options: CopyToClipboardOptionsType) {
  const onFailure = options.onFailure ?? defaultOnCopyToClipboardFailure;
  const onSuccess = options.onSuccess ?? noop;

  if (!navigator.clipboard) onFailure();

  try {
    await navigator.clipboard.writeText(options.text);
    onSuccess();
  } catch (error) {
    onFailure(error);
  }
}
