<template>
	<button
		class="w-full px-3 font-semibold text-left rounded-lg py-1.5 focus:outline-none"
		:class="{
			'text-blue-600  bg-blue-100  ': active,
			'text-gray-500 hover:bg-gray-100': !active,
		}"
		@click="toggleTab"
	>
		{{ title }}
	</button>
</template>

<script>
	export default {
		props: {
			index: {
				required: true,
				type: Number,
			},
			title: {
				required: true,
				type: String,
			},
			active: {
				type: Boolean,
				default: false,
			},
		},

		methods: {
			toggleTab() {
				this.$emit('toggle', this.index);
			},
		},
	};
</script>
