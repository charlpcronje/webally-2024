<script>
    import { fade } from 'svelte/transition';
    import { loading } from '$lib/stores/loadingStore';
  </script>
  
  {#if $loading}
    <div class="overlay" transition:fade={{ duration: 300 }}>
      <img
        src="/loader.gif"
        alt="Loading..."
        class="loader"
        transition:fade={{ duration: 300 }}
      />
    </div>
  {/if}
  
  <style>
    .overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0,1); /* Semi-transparent background */
      z-index: 9999;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  
    .loader {
      width: 200px; /* Adjust size as needed */
      height: 200px; /* Adjust size as needed */
    }
  </style>