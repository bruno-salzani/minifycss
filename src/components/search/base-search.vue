<template>
	<div class="w-full p-3 mb-3 bg-white rounded-lg shadow mt-2.5">
		<div class="relative text-gray-600">
			<div class="flex items-center">
				<input
					type="search"
					name="search"
					placeholder="Buscar"
					class="w-full h-10 bg-gray-100 rounded-full pb-0.5 pl-9 focus:outline-none"
				/>
				<button class="ml-1 focus:outline-none" @click="toggleClass">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="text-gray-500 w-7 h-7"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
						/>
					</svg>
				</button>
			</div>
			<div class="absolute top-0 mt-3 left-4">
				<svg
					class="w-4 h-4 fill-current"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					version="1.1"
					id="Capa_1"
					x="0px"
					y="0px"
					viewBox="0 0 56.966 56.966"
					style="enable-background: new 0 0 56.966 56.966"
					xml:space="preserve"
					width="512px"
					height="512px"
				>
					<path
						d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
					/>
				</svg>
			</div>
		</div>
		<div :class="[isActive ? 'block' : 'hidden']" class="px-1 mt-1">
			<div class="pl-2 pr-1 rounded-lg hover:bg-gray-100">
				<label for="toogleButton" class="flex items-center justify-between w-full py-2 cursor-pointer">
					<div>Aeronáves inativas</div>
					<!-- toggle -->
					<div class="relative">
						<input id="toogleButton" type="checkbox" class="hidden" />
						<!-- path -->
						<div class="h-6 bg-gray-200 rounded-full w-11 toggle-path"></div>
						<!-- crcle -->
						<div class="absolute w-5 h-5 bg-white rounded-full shadow toggle-circle"></div>
					</div>
				</label>
			</div>
			<div class="pl-2 pr-1 rounded-lg hover:bg-gray-100">
				<label for="toogleButton2" class="flex items-center justify-between w-full py-2 cursor-pointer">
					<div>Aeronáves vazias</div>
					<!-- toggle -->
					<div class="relative">
						<input id="toogleButton2" type="checkbox" class="hidden" />
						<!-- path -->
						<div class="h-6 bg-gray-200 rounded-full w-11 toggle-path"></div>
						<!-- crcle -->
						<div class="absolute w-5 h-5 bg-white rounded-full shadow toggle-circle"></div>
					</div>
				</label>
			</div>
			<div class="relative flex justify-between">
				<select
					class="w-full h-10 px-2 pr-10 rounded-lg appearance-none cursor-pointer focus:outline-none hover:bg-gray-100"
				>
					<option value="1" hidden>Data inicial</option>
					<option value="2">Option 3</option>
					<option value="3">Option 4</option>
					<option value="4">Option 5</option>
				</select>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="absolute top-0 right-0 w-6 h-6 mx-1 text-gray-500 pointer-events-none my-2.5"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fill-rule="evenodd"
						d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
						clip-rule="evenodd"
					/>
				</svg>
			</div>
			<div class="relative flex justify-between">
				<select
					class="w-full h-10 px-2 pr-10 rounded-lg appearance-none cursor-pointer focus:outline-none hover:bg-gray-100"
				>
					<option value="1" hidden>Data final</option>
					<option value="2">Option 3</option>
					<option value="3">Option 4</option>
					<option value="4">Option 5</option>
				</select>

				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="absolute top-0 right-0 w-6 h-6 mx-1 text-gray-500 pointer-events-none my-2.5"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fill-rule="evenodd"
						d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
						clip-rule="evenodd"
					/>
				</svg>
			</div>
			<div class="relative flex justify-between">
				<select
					class="w-full h-10 px-2 pr-10 rounded-lg appearance-none cursor-pointer focus:outline-none hover:bg-gray-100"
				>
					<option value="1" hidden>Modelo</option>
					<option value="2">Option 3</option>
					<option value="3">Option 4</option>
					<option value="4">Option 5</option>
				</select>

				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="absolute top-0 right-0 w-6 h-6 mx-1 text-gray-500 cursor-pointer pointer-events-none my-2.5"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fill-rule="evenodd"
						d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
						clip-rule="evenodd"
					/>
				</svg>
			</div>
			<div class="relative flex justify-between">
				<select
					class="w-full h-10 px-2 pr-10 rounded-lg appearance-none cursor-pointer focus:outline-none hover:bg-gray-100"
				>
					<option value="1" hidden>Proprietário</option>
					<option value="2">Option 3</option>
					<option value="3">Option 4</option>
					<option value="4">Option 5</option>
				</select>

				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="absolute top-0 right-0 w-6 h-6 mx-1 text-gray-500 pointer-events-none my-2.5"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fill-rule="evenodd"
						d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
						clip-rule="evenodd"
					/>
				</svg>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				isActive: false,
			};
		},
		methods: {
			toggleClass() {
				this.isActive = !this.isActive;
			},
		},
	};
</script>

<style scoped>
	.toggle-path {
		transition: background 0.3s ease-in-out;
	}
	.toggle-circle {
		top: 0.13rem;
		left: 0.13rem;
		transition: all 0.3s ease-in-out;
	}
	input:checked ~ .toggle-circle {
		transform: translateX(100%);
	}
	input:checked ~ .toggle-path {
		background-color: #38bdf8;
	}
</style>
