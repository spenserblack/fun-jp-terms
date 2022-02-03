<script lang="ts">
  import octicons from '@primer/octicons';

  export let name: keyof octicons | null = null;
  $: icon = name == null ? null : octicons[name].toSVG();
</script>

{#if icon != null}
  {@html icon}
{/if}
