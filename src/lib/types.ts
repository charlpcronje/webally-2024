import type { Color } from './utils/colors';

export interface Tool {
	name: string;
	description: string;
	github: string;
	details: string;
	slug?: string;
}

export enum Platform {
	GitHub = 'github',
	StackOverflow = 'stackoverflow',
	Twitter = 'twitter',
	Linkedin = 'linkedin',
	Email = 'email',
	Facebook = 'facebook',
	Youtube = 'youtube',
	Blog = 'blog',
	StackShare = 'stackShare',
	WhatsApp = 'whatsapp'
}

interface MdsvexOptions {
	extensions: string[];
	smartypants: boolean | smartypantsOptions;
	layout: string | { [name: string]: string };
	remarkPlugins: Array<plugin> | Array<[plugin, plugin_options]>;
	rehypePlugins: Array<plugin> | Array<[plugin, plugin_options]>;
	highlight: { highlighter: Function, alias: { [alias]: lang } };
	frontmatter: { parse: Function; marker: string };
}

export interface Service {
    slug: string;
    color: string;
    shortDescription: string;
    image: string;
    name: string;
    type: string;
}

export type Icon = `i-${string}-${string}`;

export enum ContractType {
	FullTime = 'Full-time',
	PartTime = 'Part-time',
	SelfEmployed = 'Self-employed',
	Freelance = 'Freelance',
	Contract = 'Contract',
	Internship = 'Internship'
}

export type Asset = string | { light: string; dark: string };

export interface Item<S extends string = string> {
	slug: S;
	name: string;
	logo: Asset;
	shortDescription: string;
	description: string;
	screenshots?: Array<{ src: string; label: string }>;
}

export interface Link {
	to: string;
	label: string;
	newTab?: boolean;
}

export interface IconLink extends Link {
	icon: Asset;
}

export interface SkillCategory<S extends string = string> {
	slug: S;
	name: string;
}

export interface Skill<S extends string = string> extends Omit<Item<S>, 'shortDescription'> {
	color: string;
	category?: SkillCategory;
}

export interface Project<S extends string = string> extends Item<S> {
	links: Array<Link>;
	color: Color;
	period: {
		from: Date;
		to?: Date;
	};
	periods?: Array<{ from: Date; to?: Date }>;
	type: string;
	skills: Array<Skill<S>>;
	company: string;
	screenshots?: Array<{ src: string; label: string }>;
}

export interface Experience<S extends string = string> extends Project<S> {
	company: string;
	location: string;
	contract: ContractType;
}

export interface Education<S extends string = string> extends Item<S> {
	organization: string;
	location: string;
	period: {
		from: Date;
		to?: Date;
	};
	subjects: Array<string>;
	degree: string;
}
