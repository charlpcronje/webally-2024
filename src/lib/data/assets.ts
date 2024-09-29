import type { Asset } from '$lib/types';
import { theme } from '$lib/stores/theme';
import { base } from '$app/paths';

const gh = (file: string) => `${base}/${file}`;

const a = (light: string, dark?: string): Asset =>
	dark ? { dark: gh(dark), light: gh(light) } : gh(light);

const Assets = {
	AdonisJs: gh('logos/adonis.png'),
	AfterEffects: gh('logos/after-effects.svg'),
	AI: gh('logos/ai.svg'),
	Android: gh('logos/android.png'),
	Angular: gh('logos/angular.png'),
	AWS: gh('logos/aws.svg'),
	Azure: gh('logos/azure.svg'),
	Bootstrap: gh('logos/bootstrap.svg'),
	C: gh('logos/c.svg'),
	Celery: gh('logos/celery.svg'),
	CircleCI: gh('logos/circleci.svg'),
	Cpp: gh('logos/cpp.svg'),
	CSS: gh('logos/css.svg'),
	Csharp: gh('logos/csharp.svg'),
	Dart: gh('logos/dart.png'),
	Deep: gh('logos/pandas.svg'),
	Delphi: gh('logos/delphi.png'),
	DeepLearning: gh('logos/deep-learning.svg'),
	Deno: gh('logos/deno.png'),
	Django: gh('logos/django.svg'),
	Docker: gh('logos/docker.svg'),
	Electron: gh('logos/electron.png'),
	ExpressJs: gh('logos/express.png'),
	FastApi: gh('logos/fastapi.svg'),
	Fastify: gh('logos/fastify.svg'),
	Firebase: gh('logos/firebase.png'),
	Flask: gh('logos/flask.svg'),
	Flutter: gh('logos/flutter.svg'),
	GCP: gh('logos/gcp.svg'),
	Git: gh('logos/git.svg'),
	Go: gh('logos/go.svg'),
	HTML: gh('logos/html.svg'),
	Illustrator: gh('logos/illustrator.svg'),
	InDesign: gh('logos/indesign.svg'),
	IOS: gh('logos/ios.svg'),
	Java: gh('logos/java.png'),
	JavaScript: gh('logos/js.png'),
	Jenkins: gh('logos/jenkins.svg'),
	Jest: gh('logos/jest.png'),
	Kafka: gh('logos/kafka.svg'),
	Kotlin: gh('logos/kotlin.png'),
	Kubernetes: gh('logos/kubernetes.svg'),
	Laravel: gh('logos/laravel.svg'),
	MachineLearning: gh('logos/machine-learning.svg'),
	MongoDB: gh('logos/mongodb.svg'),
	MSSQL: gh('logos/mssql.svg'),
	MySQL: gh('logos/mysql.svg'),
	NestJs: gh('logos/nest.svg'),
	Neo4j: gh('logos/neo4j.svg'),
	Nginx: gh('logos/nginx.svg'),
	NodeJs: gh('logos/node.png'),
	Nuxt: gh('logos/nuxt.png'),
	Numpy: gh('logos/numpy.svg'),
	Oracle: gh('logos/oracle.svg'),
	PHP: gh('logos/php.svg'),
	Photoshop: gh('logos/photoshop.svg'),
	Postcss: gh('logos/postcss.svg'),
	PostgreSQL: gh('logos/postgres.png'),
	Premiere: gh('logos/premiere.svg'),
	Python: gh('logos/python.png'),
	Quasar: gh('logos/quasar.svg'),
	RabbitMQ: gh('logos/rabbitmq.svg'),
	ReactJs: gh('logos/react.svg'),
	ReactNative: gh('logos/react-native.svg'),
	Redis: gh('logos/redis.svg'),
	Ruvy: gh('logos/ruvy.svg'),
	Rust: gh('logos/rust.svg'),
	Sass: gh('logos/sass.png'),
	Scrapy: gh('logos/scrapy.png'),
	Selenium: gh('logos/selenium.svg'),
	SolidJs: gh('logos/solid.svg'),
	Solid: gh('logos/solid.svg'),
	Svelte: gh('logos/svelte.png'),
	Symfony: gh('logos/symfony.svg'),
	Tailwind: gh('logos/tailwind.svg'),
	Travis: gh('logos/travis.svg'),
	TypeScript: gh('logos/ts.png'),
	Unity: gh('logos/unity.svg'),
	Unknown: gh('logos/unknown.svg'),
	Unocss: gh('logos/unocss.svg'),
	Unreal: gh('logos/unreal.svg'),
	Vite: gh('logos/vite.png'),
	Vitest: gh('logos/vitest.svg'),
	VueJs: gh('logos/vue.png'),
	Xamarin: gh('logos/xamarin.svg'),

	ACSA: gh('logos/acsa.png'),
	Tribake: gh('logos/tribake.png'),
	AngloAmerican: gh('logos/angloAmerican.svg'),
	APBCO: gh('logos/apbco.png'),
	BrinantSecurity: gh('logos/brinant.png'),
	CavalierAbattoirs: gh('logos/cavalier.png'),
	CityLodge: gh('logos/clhg.png'),
	Exxaro: gh('logos/exxaro.png'),
	FNB: gh('logos/fnb.png'),
	TheOrientHotel: gh('logos/theorient.png'),
	LegacyUnderwriting: gh('logos/legacy.png'),
	ImvulaICD: gh('logos/imvula.png'),
	ImperialLogistics: gh('logos/imperial.png'),
	TheCarShop: gh('logos/carshop.png'),
	PrincipalSoftware: gh('logos/d6.png'),
	PNA: gh('logos/pna.png'),

	Webally: gh('logos/webally.svg'),
	VaneSystems: gh('logos/vane.png'),
	PCPalace: gh('logos/pcpalace.jpg'),
	RAM: gh('logos/ram.png'),
	CNN: gh('logos/cnn.png'),
	Nexus: gh('logos/nexus.svg'),
	Pageworks: gh('logos/pageworks.png'),
	WhatsApp: gh('logos/whatsapp.svg'),

	BOOST_TEAM_SPEED: gh('services/boost-your-teams-speed.png'),
    FINISH_PROJECTS: gh('services/finish-unfinished-projects.png'),
    HANDLE_TEDIOUS_STUFF: gh('services/handle-the-tedious-stuff.png'),
    EXTRA_HANDS_NEW_PROJECT: gh('services/extra-hands-for-new-projects.png'),
    FLEXIBLE_FREELANCE_HELP: gh('services/flexible-freelance-help.png'),
    FINISH_HALF_BUILT_APP: gh('services/finish-half-built-apps.png'),
    DEBUGGING_OPTIMIZATION: gh('services/debugging-and-optimization.png'),
    FUTURE_PROOF_CODEBASE: gh('services/future-proof-your-codebase.png'),
    SCALE_PROJECTS: gh('services/scale-your-projects.png'),
    COMPLEX_INTEGRATIONS: gh('services/complex-integrations.png'),
};

export default Assets;

let currentTheme: boolean;

theme.subscribe((v) => (currentTheme = v));

export const getAssetURL = (asset: Asset): string => {
	return typeof asset === 'string' ? asset : currentTheme ? asset?.dark : asset.light;
};
