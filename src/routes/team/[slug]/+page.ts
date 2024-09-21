import { error } from '@sveltejs/kit';

export const prerender = false;

export async function load({ params }) {
    // Fetch team member data based on the slug
    // This is a placeholder implementation
    const teamMember = await fetchTeamMember(params.slug);

    if (teamMember) {
        return {
            teamMember
        };
    }

    throw error(404, 'Team member not found');
}

async function fetchTeamMember(slug: string) {
    // Implement actual data fetching logic here
    // For now, return a dummy object
    return {
        
        name: 'John Doe',
        role: 'Developer',
        bio: 'A passionate developer.'
    };
}