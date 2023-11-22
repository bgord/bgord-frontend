import React from "react";

export function useMetaEnterSubmit() {
  const handleMetaEnterSubmit = (
    event: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (event.key !== "Enter" || !event.metaKey) return;

    event.currentTarget.form?.dispatchEvent(
      new Event("submit", { cancelable: true })
    );
  };

  return { onKeyDown: handleMetaEnterSubmit };
}
