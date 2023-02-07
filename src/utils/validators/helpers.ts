/* eslint-disable no-useless-escape */
export const isEmpty = (value?: string | number) =>
  !value || typeof value === 'undefined' || String(value).trim() === '';

export const isEmail = (string: string) => {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return string.match(regex);
};
