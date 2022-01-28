<script lang="ts">
  import data from '../terms.json';

  const { terms } = data;
</script>

<main>
  <ul>
    {#each terms as { term, kana, romaji, translation, ...extras }}
      <li>{term}</li>
      <ul>
        <li>{kana}</li>
        <li>{romaji}</li>
        <li>{translation}</li>
      </ul>
    {/each}
  </ul>
</main>

<style lang="stylus">
  :root
    font-family sans-serif

  main
    text-align center
    padding 1em
    margin 0 auto
</style>
