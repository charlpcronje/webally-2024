<script lang="ts">
    import ContactForm from '$lib/components/ContactForm.svelte';
    import MainTitle from '$lib/components/MainTitle/MainTitle.svelte';
    import TabTitle from '$lib/components/TabTitle.svelte';
    import { onMount } from 'svelte';

    const title = 'Let\'s get in Touch';

    const mapStyle = [
        { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
        { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
        { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
        {
            featureType: "road",
            elementType: "geometry",
            stylers: [{ color: "#38414e" }]
        },
        {
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [{ color: "#212a37" }]
        },
        {
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: "#17263c" }]
        }
    ];

    let map: google.maps.Map;
    let marker: google.maps.Marker;

    onMount(() => {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAp7SMcd1cDeA5QiWNng3W0RDi8kWHrpag&callback=initMap`;
        script.async = true;
        script.defer = true;

        window.initMap = () => {
            const pretoria = { lat: -25.7479, lng: 28.2293 };
            
            map = new google.maps.Map(document.getElementById("map-background")!, {
                zoom: 13,
                center: pretoria,
                styles: mapStyle,
                disableDefaultUI: true,
                zoomControl: false,
                streetViewControl: false,
                mapTypeControl: false
            });

            marker = new google.maps.Marker({
                position: pretoria,
                map: map,
                title: "webAlly CC"
            });
        };

        document.head.appendChild(script);

        return () => {
            window.initMap = undefined;
            if (script.parentNode) {
                script.parentNode.removeChild(script);
            }
        };
    });
</script>

<script lang="ts" context="module">
    declare global {
        interface Window {
            initMap: () => void;
        }
    }
</script>

<TabTitle {title} />

<div class="flex flex-col min-h-screen">
    <div class="relative w-full h-[300px]">
        <div id="map-background" class="absolute inset-0"></div>
        <div class="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
            <MainTitle>{title}</MainTitle>
        </div>
    </div>

    <div class="container mx-auto px-4 -mt-16 relative z-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Company Info -->
            <div class="bg-black p-8 rounded shadow-lg border border-[#2e2e2e]">
                <h2 class="text-2xl font-bold mb-6 text-white">webAlly CC</h2>
                <div class="space-y-4 text-gray-300">
                    <div>
                        WhatsApp: <a href="https://wa.me/27680097995" class="hover:text-[#4CAF50] transition-colors">+27 68 0097 995</a>
                    </div>
                    <div>
                        Mobile: <a href="tel:+27680097995" class="hover:text-[#4CAF50] transition-colors">+27 68 0097 995</a>
                    </div>
                    <div>
                        Email: <a href="mailto:info@webally.co.za" class="hover:text-[#4CAF50] transition-colors">info@webally.co.za</a>
                    </div>
                    <div>
                        Docs: <a href="https://docs.webally.co.za" class="hover:text-[#4CAF50] transition-colors" target="_blank" rel="noopener noreferrer">https://docs.webally.co.za</a>
                    </div>
                    <div>
                        YouTube: <a href="https://www.youtube.com/@webally-sa" class="hover:text-[#4CAF50] transition-colors" target="_blank" rel="noopener noreferrer">https://www.youtube.com/@webally-sa</a>
                    </div>
                </div>
            </div>

            <!-- Contact Form -->
            <div class="bg-black p-8 rounded shadow-lg border border-[#2e2e2e]">
                <ContactForm />
            </div>
        </div>
    </div>
</div>

<style>
    :global(#map-background) {
        filter: brightness(0.8);
    }
</style>