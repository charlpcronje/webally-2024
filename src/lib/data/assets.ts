import type { Asset } from '$lib/types';
import { theme } from '$lib/stores/theme';
import { base } from '$app/paths';

const gh = (file: string) => `${base}/logos/${file}`;

const a = (light: string, dark?: string): Asset =>
	dark ? { dark: gh(dark), light: gh(light) } : gh(light);

const Assets = {
	AdonisJs: gh('adonis.png'),
	AfterEffects: gh('after-effects.svg'),
	AI: gh('ai.svg'),
	Android: gh('android.png'),
	Angular: gh('angular.png'),
	AWS: gh('aws.svg'),
	Azure: gh('azure.svg'),
	Bootstrap: gh('bootstrap.svg'),
	C: gh('c.svg'),
	Celery: gh('celery.svg'),
	CircleCI: gh('circleci.svg'),
	Cpp: gh('cpp.svg'),
	CSS: gh('css.svg'),
	Csharp: gh('csharp.svg'),
	Dart: gh('dart.png'),
	Deep: gh('pandas.svg'),
	Delphi: gh('delphi.png'),
	DeepLearning: gh('deep-learning.svg'),
	Deno: gh('deno.png'),
	Django: gh('django.svg'),
	Docker: gh('docker.svg'),
	Electron: gh('electron.png'),
	ExpressJs: gh('express.png'),
	FastApi: gh('fastapi.svg'),
	Fastify: gh('fastify.svg'),
	Firebase: gh('firebase.png'),
	Flask: gh('flask.svg'),
	Flutter: gh('flutter.svg'),
	GCP: gh('gcp.svg'),
	Git: gh('git.svg'),
	Go: gh('go.svg'),
	HTML: gh('html.svg'),
	Illustrator: gh('illustrator.svg'),
	InDesign: gh('indesign.svg'),
	IOS: gh('ios.svg'),
	Java: gh('java.png'),
	JavaScript: gh('js.png'),
	Jenkins: gh('jenkins.svg'),
	Jest: gh('jest.png'),
	Kafka: gh('kafka.svg'),
	Kotlin: gh('kotlin.png'),
	Kubernetes: gh('kubernetes.svg'),
	Laravel: gh('laravel.svg'),
	MachineLearning: gh('machine-learning.svg'),
	MongoDB: gh('mongodb.svg'),
	MSSQL: gh('mssql.svg'),
	MySQL: gh('mysql.svg'),
	NestJs: gh('nest.svg'),
	Neo4j: gh('neo4j.svg'),
	Nginx: gh('nginx.svg'),
	NodeJs: gh('node.png'),
	Nuxt: gh('nuxt.png'),
	Numpy: gh('numpy.svg'),
	Oracle: gh('oracle.svg'),
	PHP: gh('php.svg'),
	Photoshop: gh('photoshop.svg'),
	Postcss: gh('postcss.svg'),
	PostgreSQL: gh('postgres.png'),
	Premiere: gh('premiere.svg'),
	Python: gh('python.png'),
	Quasar: gh('quasar.svg'),
	RabbitMQ: gh('rabbitmq.svg'),
	ReactJs: gh('react.svg'),
	ReactNative: gh('react-native.svg'),
	Redis: gh('redis.svg'),
	Ruvy: gh('ruvy.svg'),
	Rust: gh('rust.svg'),
	Sass: gh('sass.png'),
	Scrapy: gh('scrapy.png'),
	Selenium: gh('selenium.svg'),
	SolidJs: gh('solid.svg'),
	Solid: gh('solid.svg'),
	Svelte: gh('svelte.png'),
	Symfony: gh('symfony.svg'),
	Tailwind: gh('tailwind.svg'),
	Travis: gh('travis.svg'),
	TypeScript: gh('ts.png'),
	Unity: gh('unity.svg'),
	Unknown: gh('unknown.svg'),
	Unocss: gh('unocss.svg'),
	Unreal: gh('unreal.svg'),
	Vite: gh('vite.png'),
	Vitest: gh('vitest.svg'),
	VueJs: gh('vue.png'),
	Xamarin: gh('xamarin.svg'),


	ACSA: gh('acsa.png'),
	Tribake: gh('tribake.png'),
	AngloAmerican: gh('angloAmerican.svg'),
	APBCO: gh('apbco.png'),
	BrinantSecurity: gh('brinant.png'),
	CavalierAbattoirs: gh('cavalier.png'),
	CityLodge: gh('clhg.png'),
	Exxaro: gh('exxaro.png'),
	FNB: gh('fnb.png'),
	TheOrientHotel: gh('theorient.png'),
	LegacyUnderwriting: gh('legacy.png'),
	ImvulaICD: gh('imvula.svg'),
	ImperialLogistics: gh('imperial.png'),
	TheCarShop: gh('carshop.png'),
	PrincipalSoftware: gh('d6.pna'),
	PNA: gh('pna.png')
};

export default Assets;

let currentTheme: boolean;

theme.subscribe((v) => (currentTheme = v));

export const getAssetURL = (asset: Asset): string => {
	return typeof asset === 'string' ? asset : currentTheme ? asset.dark : asset.light;
};
