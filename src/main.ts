import App from './App.svelte';
import theme, { setTheme } from './theme';

if (theme != null) {
  setTheme(theme);
}

const app = new App({
  target: document.getElementById('app'),
});

export default app;
