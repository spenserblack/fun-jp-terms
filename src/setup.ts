import theme, { setTheme, prefersDark } from './theme';

if (theme != null) {
  setTheme(theme);
} else if (prefersDark) {
  setTheme('dark');
}
