<template>
	<div
		class="pt-1"
		:class="{
			'text-blue-500  border-blue-500 border-b-4 ': active,
		}"
	>
		<button
			class="px-4 pt-2 pb-3 font-medium rounded-lg focus:outline-none"
			:class="{
				'text-gray-500 hover:bg-gray-100': !active,
			}"
			@click="toggleTab"
		>
			{{ title }}
		</button>
	</div>
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
