<!-- src/routes/terms/+page.svelte -->
<script lang="ts">
	import CommonPage from '$lib/components/CommonPage.svelte';

	const title = 'Terms and Conditions';
</script>

<CommonPage {title}>
	<div class="prose max-w-none">
		<h1>{title}</h1>
		<p>Last updated: {new Date().toLocaleDateString()}</p>

		<h2>1. Acceptance of Terms</h2>
		<p>
			By accessing and using this website, you accept and agree to be bound by the terms and
			provision of this agreement.
		</p>

		<h2>2. Use License</h2>
		<p>
			Permission is granted to temporarily download one copy of the materials (information or
			software) on webAlly's website for personal, non-commercial transitory viewing only.
		</p>

		<h2>3. Disclaimer</h2>
		<p>
			The materials on webAlly's website are provided on an 'as is' basis. webAlly makes no
			warranties, expressed or implied, and hereby disclaims and negates all other warranties
			including, without limitation, implied warranties or conditions of merchantability, fitness
			for a particular purpose, or non-infringement of intellectual property or other violation of
			rights.
		</p>

		<h2>4. Limitations</h2>
		<p>
			In no event shall webAlly or its suppliers be liable for any damages (including, without
			limitation, damages for loss of data or profit, or due to business interruption) arising out
			of the use or inability to use the materials on webAlly's website, even if webAlly or a
			webAlly authorized representative has been notified orally or in writing of the possibility of
			such damage.
		</p>

		<h2>5. Revisions and Errata</h2>
		<p>
			The materials appearing on webAlly's website could include technical, typographical, or
			photographic errors. webAlly does not warrant that any of the materials on its website are
			accurate, complete or current. webAlly may make changes to the materials contained on its
			website at any time without notice.
		</p>

		<!-- Add more sections as needed -->
	</div>
</CommonPage>
