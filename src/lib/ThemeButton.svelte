<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { setTheme, unsetTheme, currentTheme, saveTheme } from '../theme';
  import type { Theme } from '../theme';

  const dispatch = createEventDispatcher();

  let mode: NonNullable<Theme> = currentTheme() ?? 'light';
  const darkMode = 'ダークモード';
  const lightMode = 'ライトモード';
  $: isDark = mode === 'dark';
  $: jpNextMode = isDark ? lightMode : darkMode;
  $: nextMode = isDark ? 'light mode' : 'dark mode';

  function onClick() {
    if (isDark) {
      unsetTheme();
    } else {
      setTheme('dark');
    }
    mode = currentTheme() ?? 'light';
    saveTheme(mode);
    dispatch('click');
  }
</script>

<button title={nextMode} on:click={onClick}>{jpNextMode}</button>

<style lang="stylus">
  button
    cursor pointer
    background-color var(--secondary)
    color var(--text)
    border none
    border-radius 10px
    padding 10px
</style>
