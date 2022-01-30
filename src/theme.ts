const key = 'fun-jp-terms-theme';
const attr = 'data-theme';
const root = document.querySelector(':root');
const localStorage = window.localStorage;
const matchMedia = window.matchMedia ?? (() => ({ matches: false }));

export type Theme = 'dark' | 'light' | undefined | null;

export const getTheme = (): Theme => localStorage?.getItem(key) as Theme;

const theme = getTheme();

export const prefersDark: boolean = matchMedia('(prefers-color-scheme: dark)').matches;

export const saveTheme = (t: Theme): void => {
  if (t == null) {
    localStorage?.removeItem(key);
    return;
  }
  localStorage?.setItem(key, t);
};

export const setTheme = (t: NonNullable<Theme>): void => {
  root?.setAttribute(attr, t);
};

export const unsetTheme = (): void => {
  root?.removeAttribute(attr);
};

export const currentTheme = (): Theme => root?.getAttribute(attr) as Theme;

export default theme;
