<script>
  import { onMount } from 'svelte';

  export let measurementId = 'G-YPWDPYVBH7'; // Your Google Analytics measurement ID

  onMount(() => {
    // Create script elements
    const script1 = document.createElement('script');
    const script2 = document.createElement('script');

    // Set the src for the first script (Google Analytics library)
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    script1.async = true;

    // Set the content for the second script (Google Analytics configuration)
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${measurementId}');
    `;

    // Append the scripts to the document head
    document.head.appendChild(script1);
    document.head.appendChild(script2);

    // Cleanup function
    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  });
</script>