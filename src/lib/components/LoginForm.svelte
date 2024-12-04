<script lang="ts">
    import { goto } from '$app/navigation'
    import { enhance } from '$app/forms'
  
    let email = ''
    let password = ''
    let error = ''
  
    const handleSubmit = async (event: SubmitEvent) => {
      const form = event.target as HTMLFormElement
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' }
      })
  
      const result = await response.json()
  
      if (result.success) {
        goto('/admin/dashboard')
      } else {
        error = result.error
      }
    }
  </script>
  
  <form on:submit|preventDefault={handleSubmit} class="space-y-4">
    <div>
      <label for="email" class="block text-sm font-medium text-gray-300">Email</label>
      <input type="email" id="email" bind:value={email} required class="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white" />
    </div>
    <div>
      <label for="password" class="block text-sm font-medium text-gray-300">Password</label>
      <input type="password" id="password" bind:value={password} required class="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white" />
    </div>
    {#if error}
      <p class="text-red-500 text-sm">{error}</p>
    {/if}
    <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
      Log in
    </button>
  </form>