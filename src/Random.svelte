<script lang="ts">
  import data from '../terms.json';
  import TermCard from './lib/TermCard.svelte';
  import Body from './lib/Body.svelte';
  import type { Term as TermType } from './types';

  const terms: TermType[] = data.terms;

  const {
    term,
    kana,
    romaji,
    translation,
    source,
    ...extras
  }: TermType = terms[Math.floor(Math.random() * terms.length)];

  function enableTransition() {
    document.querySelector(':root')?.setAttribute('data-transition', 'enabled');
  }
</script>

<Body>
  <div class="row">
    <div class="col">
      <TermCard {term} {kana} {romaji} {translation} {source} {extras}/>
    </div>
  </div>
</Body>
