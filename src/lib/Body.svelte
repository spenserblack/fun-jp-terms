<script lang="ts">
  import Octicon from './Octicon.svelte';
  import ThemeButton from './ThemeButton.svelte';

  function enableTransition() {
    document.querySelector(':root')?.setAttribute('data-transition', 'enabled');
  }
</script>

<main>
  <header class="row">
    <div class="header-left">
    </div>
    <div class="header-center">
      <div class="row">
        <div class="col">
          <h1>Fun Japanese Terms</h1>
        </div>
      </div>
      <div class="row">
        <a class="col" href="/">Home</a>
        <a class="col" href="/random/">Random</a>
        <a class="col" href="//github.com/spenserblack/fun-jp-terms">
          <Octicon name="mark-github" /> Repository
        </a>
      </div>
    </div>
    <div class="header-right">
      <ThemeButton square fill on:click={enableTransition} />
    </div>
  </header>
  <slot></slot>
</main>

<style lang="stylus">
  @require "../style/themes"

  theme-mixin(theme)
    for prop, val in theme
      custom-prop = '--%s' % unquote(prop)
      {custom-prop}: val
      {custom-prop}-dark: darken(val, 20%)

  :root
    theme-mixin(light-theme)

  :root[data-theme="dark"]
    theme-mixin(dark-theme)

  :root
    background-color var(--primary)
    color var(--text)
    font-family sans-serif

  :root[data-transition="enabled"]
    transition all .5s

  main
    text-align center
    margin 0 auto

  .row
    $margin = 1%
    display flex
    margin-top $margin
    margin-bottom $margin

  header
    background-color var(--secondary)

  header.row
    margin-top 0
    justify-content space-between

    .header-left, .header-right
      flex 0 0 25%

    .header-center
      flex 0 0 50%

  .col
    justify-content center
    flex-basis 0
    flex-grow 1
    max-width 100%

  a
    color var(--link)

    &:visited
    &:active
      color var(--link-active)
</style>
