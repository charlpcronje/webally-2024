// src/lib/data/navbar.ts
export const items = [
	{ 
		title: 'Skills', 
		to: '/skills', 
		icon: 'i-carbon-software-resource-cluster', 
		position: 'header', 
		row: 1, 
		external: false 
	},
	{ 
		title: 'Experience', 
		to: '/experience', 
		icon: 'i-carbon-development', 
		position: 'header', 
		row: 1, 
		external: false 
	},
	{ 
		title: 'Projects', 
		to: '/projects', 
		icon: 'i-carbon-cube', 
		position: 'header', 
		row: 1, 
		external: false 
	},
	
	//{ title: 'Team', to: '/team', icon: 'i-carbon-user', position: 'header', row: 1, external: false },
	{ 
		title: 'Resume', 
		to: 'https://cv.webally.co.za', 
		icon: 'i-carbon-document', 
		position: 'header', 
		external: true 
	},
	{ 
		title: 'Documentation', 
		to: '/documentation', 
		icon: 'i-carbon-document', 
		position: 'header', 
		external: false 
	},
	{ 
		title: 'AI Tools', 
		to: '/tools/ai', 
		icon: 'i-carbon-machine-learning-model', 
		position: 'sidebar', 
		external: false 
	},
	{ 
		title: 'Data Tools', 
		to: '/tools/data', 
		icon: 'i-carbon-cube', 
		position: 'sidebar', 
		external: false 
	},
	{ 
		title: 'Code Tools', 
		to: '/tools/code', 
		icon: 'i-carbon-code', 
		position: 'sidebar', 
		external: false 
	},
	{ 
		title: 'Terms & Conditions', 
		to: '/terms', 
		icon: 'i-carbon-document-signed', 
		position: 'footer', 
		external: false 
	},
	{ 
		title: 'Privacy Policy', 
		to: '/privacy', 
		icon: 'i-carbon-document', 
		position: 'footer', 
		external: false 
	}
	//{ title: 'Contact Us', to: '/contact', icon: 'i-carbon-phone', position: 'header', external: false },
	//{ title: 'Playground', to: '/playground', icon: 'i-carbon-game-console', position: 'sidebar' },
] as const;

export const footerItems = [

] as const;