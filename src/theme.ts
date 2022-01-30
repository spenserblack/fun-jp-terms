const key = 'fun-jp-terms-theme';
const attr = 'data-theme';
const root = document.querySelector(':root');
const localStorage = window.localStorage;
const matchMedia = window.matchMedia ?? (() => ({ matches: false }));

export const getTheme = (): string | undefined | null => localStorage?.getItem(key);

const theme = getTheme();

export const prefersDark: boolean = matchMedia('(prefers-color-scheme: dark)').matches;

export const saveTheme = (t: string | null): void => {
  if (t == null) {
    localStorage?.removeItem(key);
    return;
  }
  localStorage?.setItem(key, t);
};

export const setTheme = (t: string): void => {
  root?.setAttribute(attr, t);
};

export const unsetTheme = (): void => {
  root?.removeAttribute(attr);
};

export default theme;
