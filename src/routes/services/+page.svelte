<script lang="ts">
    // src/routes/services/+page.svelte
    
    import type { Service, serviceCategory } from '$lib/types';
    import Chip from '$lib/components/Chip/Chip.svelte';
    import ServiceCard from '$lib/components/ServiceCard/ServiceCard.svelte';
    import SearchPage from '$lib/components/SearchPage.svelte';
    import UIcon from '$lib/components/Icon/UIcon.svelte';
    
    // 'data' comes from the load function in +page.server.ts
    export let data: { categories: serviceCategory[] };
    
    let search = '';
    let displayedCategories: serviceCategory[] = [];
    
    $: {
        // Filter categories based on the search query
        displayedCategories = data.categories.map(category => ({
            ...category,
            services: category.services.filter((service) => {
                const isSearched =
                    search.trim().length === 0 ||
                    service.name.trim().toLowerCase().includes(search.trim().toLowerCase()) ||
                    category.name.trim().toLowerCase().includes(search.trim().toLowerCase());
    
                return isSearched;
            })
        })).filter(category => category.services.length > 0);
    }
    
    const onSearch = (e: CustomEvent<{ search: string }>) => {
        search = e.detail.search;
    };
</script>

<SearchPage title="Services" on:search={onSearch}>
  {#if displayedCategories.length === 0}
      <div class="p-5 col-center gap-3 m-y-auto text-[var(--accent-text)] flex-1">
          <UIcon icon="i-carbon-cube" classes="text-3.5em" />
          <p class="font-300">Could not find any services...</p>
      </div>
  {:else}
      {#each displayedCategories as category}
          <div class="category-section mt-5" style="margin-bottom:50px">
              <div class="row items-center gap-5">
                  <div class="bg-[var(--main-hover)] h-[1px] w-[20px]" />
                  <p class="text-[var(--main-close)]">{category.name}</p>
                  <div class="flex-1 bg-[var(--main-hover)] h-[1px]" />
              </div>
              <p class="category-description mt-2 mb-4">{category.shortDescription}</p>
              <div class="services-list">
                  {#each category.services as service}
                      <ServiceCard {service} />
                  {/each}
              </div>
          </div>
      {/each}
  {/if}
</SearchPage>

<style lang="scss">
  .category-description {
    color: var(--secondary-text);
    font-size: 0.9em;
  }

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
