<script>
	import '../app.css';
	import HomeTopNavigator from '$lib/HomeTopNavigator.svelte';
	import FooterSitemap from '$lib/FooterSitemap.svelte';
	import TopDescriptionBox from '$lib/TopDescriptionBox.svelte';
</script>

<div class="bg-repeat-x py-4 bg-white">
	<HomeTopNavigator />
</div>
<main>
	<div class="py-6 bg-gradient-to-b from-indigo-300 to-zinc-100">
		<TopDescriptionBox />
	</div>
	<div class="py-12 bg-white">
		<slot />
	</div>
</main>
<div class="py-6 bg-zinc-100">
	<FooterSitemap />
</div>
