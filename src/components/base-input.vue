<template>
	<fieldset class="relative z-0 w-full bg-white border border-gray-300 rounded-md">
		<input
			class="block w-full px-3 pt-5 pb-2 mt-0 bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-black"
			type="text"
			placeholder=" "
			:value="value"
		/>
		<label class="absolute top-0 pl-4 text-lg text-gray-500 duration-300 pt-3 -z-1 origin-0">
			{{ title }}
		</label>
	</fieldset>
</template>

<script></script>

<script>
	export default {
		props: {
			title: {
				required: true,
				type: String,
			},
			value: {
				required: false,
				default: '',
				type: String,
			},
		},
	};
</script>

<style>
	.-z-1 {
		z-index: -1;
	}

	.origin-0 {
		transform-origin: 0%;
	}

	input:focus ~ label,
	input:not(:placeholder-shown) ~ label,
	textarea:focus ~ label,
	textarea:not(:placeholder-shown) ~ label,
	select:focus ~ label,
	select:not([value='']):valid ~ label {
		/* @apply transform; scale-75; -translate-y-6; */
		--tw-translate-x: 0;
		--tw-translate-y: 0;
		--tw-rotate: 0;
		--tw-skew-x: 0;
		--tw-skew-y: 0;
		transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate))
			skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
		--tw-scale-x: 0.75;
		--tw-scale-y: 0.75;
		--tw-translate-y: -0.65rem;
	}

	input:focus ~ fieldset,
	select:focus ~ fieldset {
		border: #0ea5e9;
	}
</style>
