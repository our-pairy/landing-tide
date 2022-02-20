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
				entry.target.classList.add('motion-safe:animate-fade-in-bottom');
				entry.target.classList.add('opacity-100');
			} else {
				// Otherwise remove the fadein class
				entry.target.classList.remove('motion-safe:animate-fade-in-bottom');
				entry.target.classList.add('opacity-100');
			}
		});
	};
</script>

<div class="grid grid-cols-12 content-end js-show-on-scroll mb-8">
	<div class="col-start-3 col-span-3 text-right mb-48 mt-auto">
		<h2 class="text-4xl text-zinc-800">
			회의를 했는데<br /><b>결론은 흐지부지</b>
		</h2>
		<br />
		<h2 class="text-2xl text-zinc-600 font-light">
			회의 설계로<br />달라질 수 있어요
		</h2>
		<h2 class="text-2xl text-zinc-600">
			반드시 결론을 얻어가도록<br />회의를 설계해보세요
		</h2>
	</div>
	<div class="col-start-7 col-span-4 max-w-sm">
		<img
			class="mb-12"
			src="../static/asset/landing-tide-1.png"
			alt="tide gives meeting solution by setting agenda timelines and goals"
		/>
	</div>
</div>
<div class="bg-indigo-900 py-16">
	<div class="grid grid-cols-12 js-show-on-scroll mb-8 justify-items-center">
		<div class="col-start-1 col-span-3 max-w-lg -ml-40">
			<img
				src="../static/asset/landing-tide-2-3.png"
				alt="tide gives meeting solution by setting agenda timelines and goals"
			/>
		</div>
		<div class="col-start-4 col-span-6 max-w-lg text-center">
			<img
				class="mb-12"
				src="../static/asset/landing-tide-2-1.png"
				alt="tide gives meeting solution by setting agenda timelines and goals"
			/>
			<img
				class="mb-4 w-2/3 mx-auto"
				src="../static/asset/landing-tide-2-4.svg"
				alt="tide gives meeting solution by setting agenda timelines and goals"
			/>
			<h2 class="text-4xl text-white">회의하다<br /><b>산으로 가는 일 없도록</b><br />...</h2>
			<br />
			<h2 class="text-2xl text-slate-100 font-light">
				오늘 회의에서<br />어떤 순서로 무슨 이야기를 할 지<br />
			</h2>
			<h2 class="text-2xl text-slate-100">다같이 보며 이야기 해보세요</h2>
		</div>
		<div class="col-start-10 col-span-3 max-w-xl -mr-40">
			<img
				src="../static/asset/landing-tide-2-2.png"
				alt="tide gives meeting solution by setting agenda timelines and goals"
			/>
		</div>
	</div>
</div>
<div class="grid grid-cols-12 js-show-on-scroll mt-12 mb-8">
	<div class="col-start-3 col-span-3 text-left mb-24 mt-auto">
		<h2 class="text-4xl text-zinc-800">회의할때<br /><b>메모할 공간이<br />필요하신가요?</b></h2>
		<br />
		<h2 class="text-2xl text-zinc-600">회의 순서마다<br />나온 이야기들을</h2>
		<h2 class="text-2xl text-zinc-600 font-light">바로 메모해보세요</h2>
	</div>
	<div class="col-start-7 col-span-4 -mr-96">
		<img
			src="../static/asset/landing-tide-3.png"
			alt="tide gives meeting solution by setting agenda timelines and goals"
		/>
	</div>
</div>
<div class="bg-white py-2">
	<div class="grid grid-cols-12 js-show-on-scroll">
		<div class="col-start-4 col-span-6 text-center mb-24 mt-12 p-12 border-t-zinc-400">
			<h2 class="text-2xl text-zinc-800 font-light">
				회의 전용 솔루션으로<br />팀의 회의 시간 대비 효율을 극대화하세요<br /><b
					class="text-cyan-800">바쁜 팀일수록 필요합니다</b
				>
			</h2>
			<button
				class="transition-all duration-150 ease-out px-8 py-2 bg-cyan-600 rounded-full text-xl text-white mt-6 hover:bg-cyan-800"
				><a href="https://form.typeform.com/to/Z4J1SuVY">가장 먼저 써보기</a></button
			>
		</div>
	</div>
</div>
