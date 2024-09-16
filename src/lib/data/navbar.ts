// src/lib/data/navbar.ts

export const items = [
	{ title: 'Skills', to: '/skills', icon: 'i-carbon-software-resource-cluster', position: 'header', row: 1 },
	{ title: 'Projects', to: '/projects', icon: 'i-carbon-cube', position: 'header', row: 1 },
	{ title: 'Experience', to: '/experience', icon: 'i-carbon-development', position: 'header', row: 1 },
	{ title: 'Education', to: '/education', icon: 'i-carbon-education', position: 'header', row: 1 },
	{ title: 'Resume', to: '/resume', icon: 'i-carbon-result', position: 'header', row: 1 },
	{ title: 'Documentation', to: '/documentation', icon: 'i-carbon-document', position: 'header' },
	{ title: 'AI Tools', to: '/ai-tools', icon: 'i-carbon-machine-learning-model', position: 'header' },
	{ title: 'Playground', to: '/playground', icon: 'i-carbon-game-console', position: 'footer' },
] as const;

export const footerItems = [
	{ title: 'Terms and Conditions', to: '/terms', icon: 'i-carbon-document-signed', position: 'footer' },
	{ title: 'Privacy Policy', to: '/privacy', icon: 'i-carbon-privacy', position: 'footer' }
] as const;