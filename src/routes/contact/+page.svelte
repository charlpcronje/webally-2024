<script lang="ts">
	import CommonPage from '$lib/components/CommonPage.svelte';
	import Card from '$lib/components/Card/Card.svelte';
	import UIcon from '$lib/components/Icon/UIcon.svelte';

	const title = 'Contact Us';

	let fullName = '';
	let email = '';
	let message = '';
	let isRobot = true;
	let formSubmitted = false;
	let formError = false;

	const handleSubmit = async () => {
		// TODO: Implement actual email sending logic
		const success = Math.random() > 0.5; // Simulating success/failure

		if (success) {
			formSubmitted = true;
			fullName = '';
			email = '';
			message = '';
			isRobot = true;
		} else {
			formError = true;
		}
	};
</script>

<CommonPage {title}>
	<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
		<div>
			<iframe
				title="Google Map"
				width="100%"
				height="450"
				style="border:0"
				loading="lazy"
				allowfullscreen
				src="https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=163+Garsfontein+Rd,+Pretoria,+Gauteng,+South+Africa&zoom=15&maptype=roadmap&style=element:geometry%7Ccolor:0x212121&style=element:labels.icon%7Cvisibility:off&style=element:labels.text.fill%7Ccolor:0x757575&style=element:labels.text.stroke%7Ccolor:0x212121&style=feature:administrative%7Celement:geometry%7Ccolor:0x757575&style=feature:administrative.country%7Celement:labels.text.fill%7Ccolor:0x9e9e9e&style=feature:administrative.land_parcel%7Cvisibility:off&style=feature:administrative.locality%7Celement:labels.text.fill%7Ccolor:0xbdbdbd&style=feature:poi%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:poi.park%7Celement:geometry%7Ccolor:0x181818&style=feature:poi.park%7Celement:labels.text.fill%7Ccolor:0x616161&style=feature:poi.park%7Celement:labels.text.stroke%7Ccolor:0x1b1b1b&style=feature:road%7Celement:geometry.fill%7Ccolor:0x2c2c2c&style=feature:road%7Celement:labels.text.fill%7Ccolor:0x8a8a8a&style=feature:road.arterial%7Celement:geometry%7Ccolor:0x373737&style=feature:road.highway%7Celement:geometry%7Ccolor:0x3c3c3c&style=feature:road.highway.controlled_access%7Celement:geometry%7Ccolor:0x4e4e4e&style=feature:road.local%7Celement:labels.text.fill%7Ccolor:0x616161&style=feature:transit%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:water%7Celement:geometry%7Ccolor:0x000000&style=feature:water%7Celement:labels.text.fill%7Ccolor:0x3d3d3d"
			></iframe>
		</div>
		<div class="space-y-8">
			<Card>
				<h3 class="text-lg font-semibold mb-2">John Doe</h3>
				<p>Senior Developer</p>
				<p>john.doe@webally.co.za</p>
			</Card>
			<Card>
				<h3 class="text-lg font-semibold mb-2">Jane Smith</h3>
				<p>Project Manager</p>
				<p>jane.smith@webally.co.za</p>
			</Card>
		</div>
	</div>
	<div class="mt-12">
		<Card>
			<form on:submit|preventDefault={handleSubmit} class="space-y-4">
				<div>
					<label for="fullName" class="block mb-1">Full Name</label>
					<input
						id="fullName"
						type="text"
						bind:value={fullName}
						required
						class="w-full p-2 border rounded"
					/>
				</div>
				<div>
					<label for="email" class="block mb-1">Email Address</label>
					<input
						id="email"
						type="email"
						bind:value={email}
						required
						class="w-full p-2 border rounded"
					/>
				</div>
				<div>
					<label for="message" class="block mb-1">Message</label>
					<textarea
						id="message"
						bind:value={message}
						required
						class="w-full p-2 border rounded h-32"
					></textarea>
				</div>
				<div>
					<label class="flex items-center">
						<input type="checkbox" bind:checked={isRobot} required />
						<span class="ml-2">I'm not a robot</span>
					</label>
				</div>
				<button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded" disabled={isRobot}
					>Send Message</button
				>
			</form>
			{#if formSubmitted}
				<p class="mt-4 text-green-500">Message sent successfully!</p>
			{/if}
			{#if formError}
				<p class="mt-4 text-red-500">
					Failed to send message. Please try again or contact us via phone or WhatsApp.
				</p>
			{/if}
		</Card>
	</div>
</CommonPage>
