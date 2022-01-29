<script lang="ts">
  export let term: string;
  export let kana: string;
  export let romaji: string;
  export let translation: string;
  export let extras: Record<string, string>;

  $: attributes = [{ kana }, { romaji }, { translation }, extras ].flatMap(Object.entries);
</script>

<div class="term-card">
  <h2>{term}</h2>
  <table>
    <tbody>
      {#each attributes as [name, val]}
        <tr><th scope="row">{name}</th><td>{val}</td></tr>
      {/each}
    </tbody>
  </table>
</div>

<style lang="stylus">
  @require "../style/variables"

  .term-card
    border-radius 5px
    background-color shironezumi
    width 50%
    margin 0 auto

  table
    margin 5% auto

  th
    text-align right
    text-transform capitalize

  td
    text-align left
    width 66%
</style>
