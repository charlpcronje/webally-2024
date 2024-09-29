  <script lang="ts">
  import { items, title } from '@data/services';
  import { onMount } from 'svelte';

  import type { Service } from '$lib/types';

  import Chip from '$lib/components/Chip/Chip.svelte';
  import ServiceCard from '$lib/components/ServiceCard/ServiceCard.svelte';
  import SearchPage from '$lib/components/SearchPage.svelte';
  import UIcon from '$lib/components/Icon/UIcon.svelte';

  let search = '';
  let displayed: Array<Service> = [];

  $: {
      displayed = items.filter((service) => {
          const isSearched =
              search.trim().length === 0 ||
              service.name.trim().toLowerCase().includes(search.trim().toLowerCase());

          return isSearched;
      });
  }

  const onSearch = (e: CustomEvent<{ search: string }>) => {
      search = e.detail.search;
  };

  onMount(() => {
      const query = location.search;

      if (query) {
          const queryParams = new URLSearchParams(location.search);

          const item = queryParams.get('item');

          if (item) {
              search = item;
          }
      }
  });
</script>

<SearchPage {title} on:search={onSearch}>
  {#if displayed.length === 0}
      <div class="p-5 col-center gap-3 m-y-auto text-[var(--accent-text)] flex-1">
          <UIcon icon="i-carbon-cube" classes="text-3.5em" />
          <p class="font-300">Could not find any services...</p>
      </div>
  {:else}
      <div class="services-list mt-5" style="margin-bottom:50px">
          {#each displayed as service}
              <ServiceCard {service} />
          {/each}
      </div>
  {/if}
</SearchPage>

<style lang="scss">
  .services-list {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;

      @media (max-width: 1350px) {
          grid-template-columns: repeat(2, 1fr);
      }
      @media (max-width: 850px) {
          grid-template-columns: repeat(1, 1fr);
      }
  }
</style>