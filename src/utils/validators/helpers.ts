export const isEmpty = (value?: string | number) =>
  !value || typeof value === 'undefined' || String(value).trim() === '';
