<template>
	<div>
		<the-header></the-header>

		<!-- class="px-3 pb-6 pt-28 md:px-20 sm:px-6" -->
		<div class="px-3 pb-6 pt-28 md:px-20 sm:px-6">
			<router-view />
		</div>
	</div>
</template>

<script>
	import TheHeader from './components/the-header';

	export default {
		components: {
			'the-header': TheHeader,
		},
	};
</script>
