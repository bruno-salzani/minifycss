<template>
	<div>
		<div class="max-w-2xl mx-auto mt-20">
			<!-- Titles -->
			<div class="space-y-1 w-full">
				<h2 class="text-3xl font-thin">Titulo</h2>
				<h1 class="text-2xl font-bold leading-5 text-gray-900">Titulo</h1>
				<h2 class="text-xl font-medium text-black">Titulo</h2>
				<h3 class="font-medium">Titulo</h3>
			</div>

			<!-- Panels -->
			<div class="px-4 py-3 space-y-3 bg-white rounded-lg shadow mb-3.5 w-full">
				<div class="flex space-x-3">
					<base-input title="Red"></base-input>
					<base-input title="Green"></base-input>
					<base-input title="Blue"></base-input>
				</div>
			</div>

			<!-- Inputs -->
			<fieldset class="relative z-0 w-full mb-3 bg-white border border-gray-300 rounded-md">
				<input
					class="block w-full px-3 pt-6 pb-2 mt-0 bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-black"
					type="text"
					placeholder=" "
				/>
				<label class="absolute top-0 pl-4 text-lg text-gray-500 duration-300 pt-3.5 -z-1 origin-0">
					Titulo
				</label>
			</fieldset>
			<!-- Buttons -->
			<button
				class="flex items-center justify-center bg-gray-200 rounded-md shadow py-2.5 focus:outline-none"
				@click="toggleTabs(1)"
			>
				<span class="px-3.5">
					<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
						<path
							fill-rule="evenodd"
							d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
							clip-rule="evenodd"
						/>
					</svg>
				</span>
			</button>
			<button
				id="btn-create"
				class="flex items-center px-1 py-1 text-white bg-blue-500 rounded-full focus:outline-none"
			>
				<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
					<path
						fill-rule="evenodd"
						d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
						clip-rule="evenodd"
					/>
				</svg>
			</button>
			<div class="relative">
				<button class="flex items-center px-1 py-1 text-gray-700 rounded-md focus:outline-none" id="btn-more">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="w-5 h-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
						/>
					</svg>
				</button>
				<div
					class="absolute right-0 z-20 hidden p-1 overflow-y-auto origin-top-right bg-white rounded-lg shadow-lg focus:outline-none"
					id="more"
				>
					<div class="">
						<router-link to="/" class="flex items-center h-8 rounded-md pr-1.5 pl-0.5 hover:bg-gray-100">
							<span class="inline-flex items-center justify-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="w-5 h-5"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fill-rule="evenodd"
										d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
										clip-rule="evenodd"
									/>
								</svg>
							</span>
							<span class="ml-1 text-sm font-semibold tracking-wide truncate">Adicionar</span>
						</router-link>
						<router-link
							to="/import"
							class="flex items-center h-8 rounded-md pr-1.5 pl-0.5 hover:bg-gray-100"
						>
							<span class="inline-flex items-center justify-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="w-5 h-5"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fill-rule="evenodd"
										d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z"
										clip-rule="evenodd"
									/>
								</svg>
							</span>
							<span class="ml-1 text-sm font-semibold tracking-wide truncate">Importar</span>
						</router-link>
					</div>
				</div>
			</div>
		</div>
		<footer class="flex justify-end pb-5 space-x-2">
			<router-link to="/aircrafts">
				<button
					class="px-3 py-2 rounded-md hover:bg-gray-300 focus:shadow-outline focus:outline-none"
					type="button"
				>
					Botão
				</button>
			</router-link>
			<button
				class="flex items-center justify-center px-5 py-2 text-white bg-blue-500 rounded-md shadow focus:outline-none"
				type="button"
				@click="toggleTabs(2)"
			>
				<span class="font-semibold">Botão</span>
			</button>
		</footer>
	</div>
</template>

<script>
	import BaseInput from '@/components/base-input.vue';

	export default {
		name: 'Home',
		components: {
			BaseInput,
		},
	};
</script>
