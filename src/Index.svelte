<script lang="ts">
  import data from '../terms.json';
  import TermCard from './lib/TermCard.svelte';
  import type { Term as TermType } from './types';
  import Body from './lib/Body.svelte';

  const terms: TermType[] = data.terms;

  function enableTransition() {
    document.querySelector(':root')?.setAttribute('data-transition', 'enabled');
  }
</script>

<Body>
  {#each terms as { term, kana, romaji, translation, source, ...extras }}
    <div class="row">
      <div class="col">
        <TermCard {term} {kana} {romaji} {translation} {source} {extras}/>
      </div>
    </div>
  {/each}
</Body>
