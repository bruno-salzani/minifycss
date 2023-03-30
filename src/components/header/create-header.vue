<template>
	<div class="mb-5">
		<base-title :title="title"></base-title>
		<form-step :current="currentStep" :last="lastStep"></form-step>
	</div>
</template>

<script>
	import BaseTitle from '../../components/base-title';
	import FormStep from '../../components/form/form-step';

	export default {
		components: {
			FormStep,
			BaseTitle,
		},

		props: {
			title: {
				required: true,
				type: String,
			},
			currentStep: {
				required: true,
				type: String,
			},
			lastStep: {
				required: true,
				type: String,
			},
		},
	};
</script>
