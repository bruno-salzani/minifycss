<template>
	<div class="flex items-baseline justify-between">
		<base-title :title="title"></base-title>
		<div class="flex space-x-1 item">
			<button-more v-show="hasCreate"></button-more>
			<button-create v-show="hasCreate" :route="route"></button-create>
		</div>
	</div>
</template>

<script>
	import BaseTitle from '../base-title';
	import ButtonCreate from '../button/button-create';
	import ButtonMore from '../button/button-more';

	export default {
		components: {
			BaseTitle,
			ButtonCreate,
			ButtonMore,
		},
		props: {
			title: {
				required: true,
				type: String,
			},
			hasCreate: {
				required: true,
				type: Boolean,
			},
			route: {
				required: false,
				default: '',
				type: String,
			},
		},
	};
</script>
