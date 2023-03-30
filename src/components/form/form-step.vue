<template>
	<div class="space-x-1 text-sm">
		<span class="uppercase">Passo</span>
		<span class="font-semibold">{{ current }}</span>
		<span class="uppercase">de</span>
		<span class="font-semibold">{{ last }}</span>
	</div>
</template>

<script>
	export default {
		props: {
			current: {
				required: true,
				type: String,
			},
			last: {
				required: true,
				type: String,
			},
		},
	};
</script>
