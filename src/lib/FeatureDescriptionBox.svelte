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

<div class="grid lg:grid-cols-12 content-end js-show-on-scroll mb-8">
	<div class="lg:col-start-3 lg:col-span-3 lg:text-right text-center lg:mb-40 mb-4 mt-auto">
		<h2 class="text-4xl text-zinc-800">
			•<br />회의를 했는데<br /><b>결론은 흐지부지</b>
		</h2>
		<br />
		<h2 class="text-2xl text-zinc-600 font-light">
			회의 설계로<br />달라질 수 있어요
		</h2>
		<h2 class="text-2xl text-zinc-600">
			반드시 결론을 얻어가도록<br />회의를 설계해보세요
		</h2>
	</div>
	<div class="lg:col-start-7 lg:col-span-4 lg:max-w-sm">
		<img
			class="lg:mb-12 px-4 lg:px-0"
			src="/landing-tide-1-changed.png"
			alt="tide gives meeting solution by setting agenda timelines and goals"
		/>
	</div>
</div>
<div class="bg-indigo-900 lg:py-16 pt-16 pb-2">
	<div class="grid lg:grid-cols-12 js-show-on-scroll mb-8">
		<div class="lg:col-start-3 lg:col-span-3 lg:max-w-lg lg:text-left text-center">
			<img
				class="mb-2 w-2/3 lg:mr-auto lg:ml-0 mx-auto"
				src="/landing-tide-2-4.svg"
				alt="tide gives meeting solution by setting agenda timelines and goals"
			/>
			<h2 class="text-4xl text-white">회의하다<br /><b>산으로 가는 일<br />없도록<br />••</b></h2>
			<br />
			<h2 class="text-2xl text-slate-100 font-light">
				오늘 회의에서<br />어떤 순서로<br />무슨 이야기를 할 지<br />
			</h2>
			<h2 class="text-2xl text-slate-100 mb-6 lg:mb-4">다같이 보며<br />이야기 해보세요</h2>
		</div>
		<div class="lg:col-start-7 lg:col-span-4 text-center">
			<img
				class="inline-block px-4 lg:px-0 mb-2 lg:mb-4 mt-2 lg:mt-16"
				src="/landing-tide-2-5.png"
				alt="tide gives meeting solution by setting agenda timelines and goals"
			/>
			<img
				class="mb-4 px-4 lg:px-0 lg:max-w-xl xl:max-w-2xl"
				src="/landing-tide-2-6.png"
				alt="tide gives meeting solution by setting agenda timelines and goals"
			/>
		</div>
	</div>
</div>
<div class="grid lg:grid-cols-12 js-show-on-scroll mt-12 lg:pb-16 pb-2 mb-4 lg:mb-0 lg:shadow-lg">
	<div class="lg:col-start-3 lg:col-span-2 lg:text-left text-center lg:mb-24 mt-auto">
		<h2 class="text-4xl text-zinc-800">
			•••<br />회의할때<br /><b>메모할 공간이<br />필요하신가요?</b>
		</h2>
		<br />
		<h2 class="text-2xl text-zinc-600">회의 순서마다<br />나온 이야기들을</h2>
		<h2 class="text-2xl text-zinc-600 font-light">바로 메모해보세요</h2>
	</div>
	<div class="lg:col-start-5 lg:col-span-8 px-2 lg:px-0 overflow-hidden mt-4 lg:mt-0">
		<img
			class="relative overflow-hidden object-fit lg:left-20"
			src="/landing-tide-3-changed-2.png"
			alt="tide gives meeting solution by setting agenda timelines and goals"
		/>
	</div>
</div>
<div class="bg-[url('/landing-tide-6.jpg')] bg-cover lg:py-2 py-8">
	<div class="grid lg:grid-cols-12 js-show-on-scroll">
		<div
			class="lg:col-start-4 lg:col-span-6 text-center lg:mb-24 mb-8 lg:mt-24 mt-0 lg:p-12 p-4 border-t-zinc-400"
		>
			<h2 class="text-2xl text-white font-light ">
				회의 전용 솔루션으로<br />팀의 회의시간 대비 효율을<br class="lg:hidden" /> 극대화하세요<br
				/><b class="text-cyan-200">바쁜 팀일수록 필요합니다</b>
			</h2>
			<button
				class="transition-all duration-150 ease-out px-8 py-2 bg-cyan-600 rounded-full text-xl text-white mt-6 hover:bg-cyan-800"
				><a href="https://form.typeform.com/to/Z4J1SuVY">가장 먼저 써보기</a></button
			>
		</div>
	</div>
</div>
