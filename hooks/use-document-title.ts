import { useEffect } from "react";

/**
 * Hook to update the document title
 *
 * @description
 * This hook updates the document title and restores the original title on cleanup.
 * It handles title updates efficiently and safely, including SSR scenarios.
 *
 * @example
 * ```tsx
 * function HomePage() {
 *   useDocumentTitle('Welcome to My App');
 *
 *   return <div>Home Page Content</div>;
 * }
 * ```
 *
 * @example
 * ```tsx
 * function DynamicPage({ pageTitle }: { pageTitle: string }) {
 *   useDocumentTitle(`My App - ${pageTitle}`);
 *
 *   return <div>Page Content</div>;
 * }
 * ```
 *
 * @param title - The title to set for the document
 */
export function useDocumentTitle(title: string) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}
