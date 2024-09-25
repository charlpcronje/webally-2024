// src/lib/data/home.ts

import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'webAlly';

export const lastName = '';

export const description = 'Senior Full-Stack Web / Mobile / AI / Desktop Developer.  Passionate about creating awesome tools and applications for clients and other developers';

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/charlpcronje' },
	{ platform: Platform.Linkedin, link: 'https://www.linkedin.com/in/charlpcronje' },
	{ platform: Platform.Twitter, link: 'https://twitter.com/CPCharlCronje' },
	{ platform: Platform.Email, link: 'charl@webally.co.za' },
	{ platform: Platform.WhatsApp, link: 'https://wa.me/27680097995' }
];

export const skills = getSkills(
	'js', 'ts', 'php', 'python', 'java', 'kotlin', 'csharp', 'cpp',
	'html', 'css', 'sass', 'react', 'vue', 'angular', 'svelte',
	'nodejs', 'express', 'laravel', 'symfony', 'django', 'flask',
	'mongodb', 'mysql', 'postgresql', 'mssql', 'oracle',
	'docker', 'kubernetes', 'aws', 'azure', 'gcp',
	'git', 'jenkins', 'travis', 'circleci',
	'android', 'ios', 'react-native', 'flutter',
	'unity', 'unreal',
	'ai', 'machine-learning', 'deep-learning',
	'photoshop', 'illustrator', 'indesign', 'after-effects'
);