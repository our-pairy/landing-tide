<script>
	import { onMount } from 'svelte';

	onMount(() => {
		const targets = document.querySelectorAll('.js-show-on-scroll');
		const observer = new IntersectionObserver(callback);
		targets.forEach(function (target) {
			target.classList.add('opacity-0');
			observer.observe(target);
		});
		// Callback for IntersectionObserver
	});
	const callback = function (entries) {
		entries.forEach((entry) => {
			// Is the element in the viewport?
			if (entry.isIntersecting) {
				// Add the fadeIn class:
				entry.target.classList.add('animate-fade-in-bottom');
				entry.target.classList.add('opacity-100');
			} else {
				// Otherwise remove the fadein class
				entry.target.classList.remove('animate-fade-in-bottom');
				entry.target.classList.add('opacity-100');
			}
		});
	};
</script>

<div class="grid grid-cols-12 content-end js-show-on-scroll mb-8">
	<div class="col-start-3 col-span-3 text-left mb-24 mt-auto">
		<h2 class="text-4xl text-slate-600">
			회의를 했는데<br /><b>결론은 흐지부지</b>
		</h2>
		<br />
		<h2 class="text-xl text-slate-800 font-light">
			회의 설계로<br />달라질 수 있어요.
		</h2>
		<h2 class="text-xl text-slate-800">
			반드시 결론을 얻어가도록<br />회의를 설계해보세요
		</h2>
	</div>
	<div class="col-start-7 col-span-4">
		<img
			src="../static/asset/landing-tide-1.png"
			alt="tide gives meeting solution by setting agenda timelines and goals"
		/>
	</div>
</div>
<div class="grid grid-cols-12 js-show-on-scroll mb-8">
	<div class="col-start-3 col-span-3 text-left mb-24 mt-auto">
		<h2 class="text-4xl text-slate-600">회의하다<br /><b>산으로 가는 일 없도록</b></h2>
		<br />
		<h2 class="text-xl text-slate-800">
			오늘 회의에서<br />어떤 순서로 무슨 이야기를 할 지<br />
		</h2>
		<h2 class="text-xl text-slate-800 font-light">다같이 보며 이야기 해보세요</h2>
	</div>
	<div class="col-start-7 col-span-4">
		<img
			src="../static/asset/landing-tide-1.png"
			alt="tide gives meeting solution by setting agenda timelines and goals"
		/>
	</div>
</div>
<div class="grid grid-cols-12 js-show-on-scroll mb-8">
	<div class="col-start-3 col-span-3 text-left mb-24 mt-auto">
		<h2 class="text-4xl text-slate-600">회의할때<br /><b>메모할 공간이<br />필요하신가요?</b></h2>
		<br />
		<h2 class="text-xl text-slate-800 font-light">회의 순서마다<br />나온 이야기들을</h2>
		<h2 class="text-xl text-slate-800">바로 메모해보세요</h2>
	</div>
	<div class="col-start-7 col-span-4">
		<img
			src="../static/asset/landing-tide-1.png"
			alt="tide gives meeting solution by setting agenda timelines and goals"
		/>
	</div>
</div>
