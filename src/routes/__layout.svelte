<script>
	import '../app.css';
	import HomeTopNavigator from '$lib/HomeTopNavigator.svelte';
	import FooterSitemap from '$lib/FooterSitemap.svelte';
	import TopDescriptionBox from '$lib/TopDescriptionBox.svelte';
</script>

<div class="bg-repeat-x py-4 bg-white">
	<HomeTopNavigator />
</div>
<main class="bg-gradient-to-b from-zinc-700 to-zinc-100">
	<div
		class=" bg-cover bg-center lg:bg-[url('/landing-tide-background.svg')] bg-fixed bg-origin-border"
	>
		<TopDescriptionBox />
	</div>
	<div class="pt-12 bg-white">
		<slot />
	</div>
</main>
<div class="py-6 bg-zinc-800">
	<FooterSitemap />
</div>
