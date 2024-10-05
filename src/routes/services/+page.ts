// src/routes/services/+page.ts
import { categories } from '@data/services';
import type { serviceCategory } from '$lib/types';

export function load() {
    return {
        categories: categories as serviceCategory[]
    };
}