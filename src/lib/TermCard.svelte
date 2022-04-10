<script lang="ts">
  import Octicon from './Octicon.svelte';
  import speak from '../speak';

  export let term: string;
  export let kana: string;
  export let romaji: string;
  export let translation: string | string[];
  export let extras: Record<string, string | string[]>;

  $: attributes = [{ kana }, { romaji }, { translation }, extras ].flatMap(Object.entries);
</script>

<div class="term-card">
  <h2>
    <!-- TODO Aria label -->
    {term}<Octicon on:click={() => speak(term)} name="unmute"/>
  </h2>
  <table>
    <tbody>
      {#each attributes as [name, val]}
        {#if Array.isArray(val) }
          {#each val as item, itemIndex }
            <tr><th scope="row">{name} {itemIndex + 1}</th><td>{item}</td></tr>
          {/each}
        {:else}
          <tr><th scope="row">{name}</th><td>{val}</td></tr>
        {/if}
      {/each}
    </tbody>
  </table>
</div>

<style lang="stylus">
  .term-card
    border-radius 5px
    background-color var(--secondary)
    margin 0 auto
    min-width 50%
    max-width 590px

  table
    margin 0 auto

  th, td
    vertical-align text-top
    padding 0.5em

  th
    text-align right
    text-transform capitalize

  td
    text-align left
    width 66%
</style>
