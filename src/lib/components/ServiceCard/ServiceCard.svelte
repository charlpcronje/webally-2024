<script lang="ts">
    import Card from '../Card/Card.svelte';
    import CardTitle from '../Card/CardTitle.svelte';
    import CardDivider from '../Card/CardDivider.svelte';
    import CardLogo from '../Card/CardLogo.svelte';
    import type { Service } from '$lib/types';
    import { getAssetURL } from '$lib/data/assets';
    import { base } from '$app/paths';
    import UIcon from '../Icon/UIcon.svelte';

    export let service: Service;
    export let gradientColor: string; // The hex color for the gradient overlay

    // Function to generate a linear gradient
    const generateGradient = (color: string) => {
        return `linear-gradient(45deg, ${color} 0%, transparent 100%)`;
    };
</script>

<Card color={service.color} href={`${base}/services/${service.slug}`}>
    <div class="card-content">
        <!-- Background image with gradient overlay -->
        <div class="background-image" 
             style="background-image: url({getAssetURL(service.image)});">
            <!-- Gradient overlay on top of the background image -->
            <div class="gradient-overlay" style="background: {generateGradient(gradientColor)};"></div>
        </div>
        <div class="content-overlay">
            <div class="m-t-20px row justify-between items-center">
                <CardTitle title={service.name} />
            </div>
            <CardDivider />
            <div class="col m-b-15px justify-between text-[var(--secondary-text)] text-0.85em">
                <div class="row items-center gap-2">
                    <UIcon icon="i-carbon-assembly-cluster" classes="text-1.25em" />
                    <p>{service.type}</p>
                </div>
            </div>
            <div class="col sm:h-100px md:h-160px">
                <p class="text-[0.9em] text-[var(--secondary-text)] m-t-20px m-b-40px flex-1 line-clamp-3">
                    {service.shortDescription}
                </p>
            </div>
        </div>
    </div>
</Card>

<style lang="scss">
    .card-content {
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
        border-radius: inherit;
    }

    .background-image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
        filter: grayscale(100%); /* Apply grayscale to the background image */
    }

    .gradient-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: none;
        background-size: cover;
        z-index: 2;
        opacity: 0.6; /* Adjust opacity for visibility */
    }

    .content-overlay {
        position: relative;
        z-index: 3;
        padding: 1rem;  /* Adjust padding as needed */
    }

    :global(.card-content .content-overlay *) {
        color: var(--text-color, #ffffff) !important;
    }
</style>
