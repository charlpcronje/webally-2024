<!-- src/routes/privacy/+page.svelte -->
<script lang="ts">
	import CommonPage from '$lib/components/CommonPage.svelte';

	const title = 'Privacy Policy';
</script>

<CommonPage {title}>
	<div class="prose max-w-none">
		<h1>{title}</h1>
		<p>Last updated: {new Date().toLocaleDateString()}</p>

		<h2>1. Information We Collect</h2>
		<p>
			We collect information you provide directly to us, such as when you create or modify your
			account, request services, contact customer support, or otherwise communicate with us.
		</p>

		<h2>2. How We Use Your Information</h2>
		<p>
			We use the information we collect to provide, maintain, and improve our services, to develop
			new ones, and to protect webAlly and our users.
		</p>

		<h2>3. Information Sharing and Disclosure</h2>
		<p>
			We may share the information we collect with third parties for various purposes, including to:
			provide and improve our services, protect against fraud and abuse, and personalize content.
		</p>

		<h2>4. Data Retention</h2>
		<p>
			We retain the information we collect for as long as necessary to fulfill the purposes outlined
			in this privacy policy, unless a longer retention period is required or permitted by law.
		</p>

		<h2>5. Security</h2>
		<p>
			We take reasonable measures to help protect your personal information from loss, theft,
			misuse, unauthorized access, disclosure, alteration, and destruction.
		</p>

		<!-- Add more sections as needed -->
	</div>
</CommonPage>
