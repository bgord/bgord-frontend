export function useMetaEnterSubmit() {
  const handleMetaEnterSubmit = (
    event: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (event.key !== "Enter" || !event.metaKey) return;

    event.preventDefault();

    event.currentTarget.form?.requestSubmit();
  };

  return { onKeyDown: handleMetaEnterSubmit };
}
