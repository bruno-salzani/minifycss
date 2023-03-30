<template>
	<div>
		<div class="max-w-4xl mx-auto mt-36">
			<h1 class="text-3xl font-thin mb-3">Convert RGB to Hexadecimal</h1>

			<div class="px-4 py-3 space-y-3 bg-white rounded-lg shadow mb-3.5 w-full">
				<div class="flex space-x-3 mb-4">
					<base-input title="Red"></base-input>
					<base-input title="Green"></base-input>
					<base-input title="Blue"></base-input>
				</div>
				<div class="flex justify-end space-x-2">
					<router-link to="/aircrafts">
						<button
							class="px-3 py-2 rounded-md hover:bg-gray-300 focus:shadow-outline focus:outline-none"
							type="button"
						>
							Reset
						</button>
					</router-link>
					<button
						class="flex items-center justify-center px-5 py-2 text-white bg-blue-500 rounded-md shadow focus:outline-none"
						type="button"
						@click="toggleTabs(2)"
					>
						<span class="font-semibold">Convert</span>
					</button>
				</div>
			</div>
			<div class="px-4 py-3 space-y-3 bg-white rounded-lg shadow mb-3.5 w-full">
				<div class="flex items-center">
					<div class="h-52 w-52 space-y-3 bg-red-600 rounded-lg shadow"></div>
					<span>Hex: #FFFFFF</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6 text-gray-500"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
						/>
					</svg>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import BaseInput from '@/components/base-input.vue';

	export default {
		components: {
			BaseInput,
		},
	};
</script>
