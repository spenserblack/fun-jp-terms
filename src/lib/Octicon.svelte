<script lang="ts">
  import octicons from '@primer/octicons';

  export let name: string | null = null;
  $: icon = octicons[name]?.toSVG();
</script>

{#if icon != null}
  {@html icon}
{/if}
