<template>
	<div
		class="mx-auto"
		:class="{ hidden: openTab !== number, block: openTab === number } + size"
		:name="'tab' + number"
	></div>
</template>

<script>
	export default {
		props: {
			number: {
				required: true,
				type: String,
			},
			size: {
				required: false,
				default: 'max-w-xl',
				type: String,
			},
		},
	};
</script>
