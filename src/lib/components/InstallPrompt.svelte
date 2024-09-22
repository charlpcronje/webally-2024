<script lang="ts">
    import { onMount } from 'svelte';
    
    let deferredPrompt: any;
    let showInstallPrompt = false;

    onMount(() => {
        window.addEventListener('beforeinstallprompt', (e) => {
            // Prevent Chrome 67 and earlier from automatically showing the prompt
            e.preventDefault();
            // Stash the event so it can be triggered later
            deferredPrompt = e;
            // Show the install button
            showInstallPrompt = true;
        });
    });

    function installApp() {
        showInstallPrompt = false;
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult: { outcome: string }) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the install prompt');
            } else {
                console.log('User dismissed the install prompt');
            }
            deferredPrompt = null;
        });
    }
</script>

{#if showInstallPrompt}
    <div class="install-prompt">
        <p>Install "webAlly" for a better experience!</p>
        <button on:click={installApp}>Add to Home Screen</button>
    </div>
{/if}

<style>
    .install-prompt {
        position: fixed;
        bottom: 20px;
        left: 20px;
        right: 20px;
        background-color: #000000;
        border:1px solid #FFF;
        padding: 15px;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 1000;
    }

    button {
        background-color: #101110;
        border: none;
        color: white;
        padding: 10px 20px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
        border-radius: 4px;
    }
</style>