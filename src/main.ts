import App from './App.svelte';
import theme, { setTheme, prefersDark } from './theme';

if (theme != null) {
  setTheme(theme);
} else if (prefersDark) {
  setTheme('dark');
}

const app = new App({
  target: document.getElementById('app'),
});

export default app;
