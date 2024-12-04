<script lang="ts">
    // src/lib/components/Auth.svelte
    import { auth } from '$lib/Auth';
    import { user } from '$lib/User';
    
    export let role: string | undefined = undefined;
    export let not: string | undefined = undefined;
    export let if: boolean | string | undefined = undefined;
  
    $: isAuthorized = (() => {
      if (if !== undefined) {
        return if === true || if === '1' || if === 'true' ? user.isLoggedIn() : !user.isLoggedIn();
      }
      if (role) {
        return auth.hasRole(role);
      }
      if (not) {
        return !auth.hasRole(not);
      }
      return user.isLoggedIn();
    })();
</script>

{#if isAuthorized}
	<slot></slot>
{/if}
