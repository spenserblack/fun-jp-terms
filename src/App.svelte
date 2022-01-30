<script lang="ts">
  import data from '../terms.json';
  import TermCard from './lib/TermCard.svelte';
  import type { Term as TermType } from './types';

  const terms = data.terms as Array<TermType>;
</script>

<main>
  <h1>Fun Japanese Terms</h1>
  {#each terms as { term, kana, romaji, translation, ...extras }}
    <TermCard {term} {kana} {romaji} {translation} {extras}/>
  {/each}
</main>

<style lang="stylus">
  @require "./style/themes"

  theme-mixin(theme)
    for prop, val in theme
      custom-prop = '--%s' % unquote(prop)
      {custom-prop}: val

  :root
    theme-mixin(light-theme)

  :root
    background-color var(--primary)
    color var(--text)
    font-family sans-serif

  main
    text-align center
    padding 1em
    margin 0 auto
</style>
