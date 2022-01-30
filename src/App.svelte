<script lang="ts">
  import data from '../terms.json';
  import ThemeButton from './lib/ThemeButton.svelte';
  import TermCard from './lib/TermCard.svelte';
  import type { Term as TermType } from './types';

  const terms = data.terms as Array<TermType>;
</script>

<main>
  <header class="row">
    <div class="header-left">
    </div>
    <div class="header-center">
      <h1>Fun Japanese Terms</h1>
    </div>
    <div class="header-right">
      <ThemeButton />
    </div>
  </header>
  {#each terms as { term, kana, romaji, translation, ...extras }}
    <div class="row">
      <TermCard {term} {kana} {romaji} {translation} {extras}/>
    </div>
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

  :root[data-theme="dark"]
    theme-mixin(dark-theme)

  :root
    background-color var(--primary)
    color var(--text)
    font-family sans-serif

  main
    text-align center
    padding 1em
    margin 0 auto

  .row
    $margin = 1%
    display flex
    margin-top $margin
    margin-bottom $margin

  header.row
    justify-content space-between

    .header-left, .header-right
      flex 0 0 25%

    .header-center
      flex 0 0 50%
</style>
