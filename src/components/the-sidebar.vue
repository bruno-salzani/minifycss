<template>
	<div
		class="fixed top-0 left-0 flex flex-col w-0 h-full pl-2 text-gray-700 bg-white shadow-md pt-14 lg:w-64 xl:w-80"
	>
		<div class="flex flex-col py-1 overflow-y-auto" id="sidebar">
			<router-link to="/user/id" class="flex items-center px-2 py-1 pl-2 rounded-lg hover:bg-gray-100">
				<img
					class="w-10 h-10 rounded-full"
					src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
					alt=""
				/>

				<div class="flex flex-col ml-2 leading-5">
					<span class="ml-1 font-semibold tracking-wide mb-0.5">Bruno Salzani</span>

					<div>
						<span class="text-sm font-medium text-blue-500 bg-blue-100 rounded-full px-1.5"> Piloto </span>
					</div>
				</div>
			</router-link>

			<div class="flex items-center m-1 border-t border-gray-300"></div>

			<router-link to="/" class="flex items-center py-3 mr-2 rounded-lg hover:bg-gray-100">
				<span class="inline-flex items-center justify-center ml-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="w-8 h-8"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
						/>
					</svg>
				</span>

				<span class="ml-4 font-semibold tracking-wide truncate">Inicio</span>
			</router-link>

			<router-link to="/activities" class="flex items-center py-3 mr-2 rounded-lg hover:bg-gray-100">
				<span class="inline-flex items-center justify-center ml-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="w-8 h-8"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
						/>
					</svg>
				</span>

				<span class="ml-4 font-sans font-semibold tracking-wide truncate">Atividades</span>
			</router-link>

			<router-link to="/reminders" class="flex items-center py-3 mr-2 rounded-lg hover:bg-gray-100">
				<span class="inline-flex items-center justify-center ml-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="w-8 h-8"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
						/>
					</svg>
				</span>

				<span class="ml-4 font-sans font-semibold tracking-wide truncate">Lembretes</span>
			</router-link>

			<div class="flex items-center m-1 border-t border-gray-300"></div>

			<router-link to="/" class="flex items-center py-3 mr-2 rounded-lg hover:bg-gray-100">
				<span class="inline-flex items-center justify-center ml-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="w-8 h-8"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
						/>
					</svg>
				</span>

				<span class="ml-4 font-sans font-semibold tracking-wide truncate">Calendário</span>
			</router-link>

			<router-link to="/dashboard" class="flex items-center py-3 mr-2 rounded-lg hover:bg-gray-100">
				<span class="inline-flex items-center justify-center ml-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="w-8 h-8"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
						/>
					</svg>
				</span>

				<span class="ml-4 font-sans font-semibold tracking-wide truncate">Dashboard</span>
			</router-link>

			<router-link to="/" class="flex items-center py-3 mr-2 rounded-lg hover:bg-gray-100">
				<span class="inline-flex items-center justify-center ml-2">
					<svg
						class="w-8 h-8"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
						></path>

						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
						></path>
					</svg>
				</span>

				<span class="ml-4 font-sans font-semibold tracking-wide truncate">Relatórios</span>
			</router-link>

			<div class="flex items-center m-1 border-t border-gray-300"></div>

			<router-link to="/aircrafts" class="flex items-center py-3 mr-2 rounded-lg hover:bg-gray-100">
				<span class="inline-flex items-center justify-center ml-2">
					<svg
						class="w-8 h-8"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						stroke-width="2"
						stroke="currentColor"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path stroke="none" d="M0 0h24v24H0z" />

						<path d="M16 10h4a2 2 0 0 1 0 4h-4l-4 7h-3l2 -7h-4l-2 2h-3l2-4l-2 -4h3l2 2h4l-2 -7h3z" />
					</svg>
				</span>

				<span class="ml-4 font-sans font-semibold tracking-wide truncate">Aeronaves</span>
			</router-link>

			<router-link to="/users" class="flex items-center py-3 mr-2 rounded-lg hover:bg-gray-100">
				<span class="inline-flex items-center justify-center ml-2">
					<svg
						class="w-8 h-8"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
						></path>
					</svg>
				</span>

				<span class="ml-4 font-sans font-semibold tracking-wide truncate">Usuários</span>
			</router-link>

			<router-link to="/roles" class="flex items-center py-3 mr-2 rounded-lg hover:bg-gray-100">
				<span class="inline-flex items-center justify-center ml-2">
					<svg
						class="w-8 h-8"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
						></path>
					</svg>
				</span>

				<span class="ml-4 font-sans font-semibold tracking-wide truncate">Cargos</span>
			</router-link>

			<router-link to="/groups" class="flex items-center py-3 mr-2 rounded-lg hover:bg-gray-100">
				<span class="inline-flex items-center justify-center ml-2">
					<svg
						class="w-8 h-8"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
						></path>
					</svg>
				</span>

				<span class="ml-4 font-sans font-semibold tracking-wide truncate">Grupos</span>
			</router-link>

			<div class="flex items-center m-1 border-t border-gray-300"></div>

			<router-link to="/logbooks" class="flex items-center py-3 mr-2 rounded-lg hover:bg-gray-100">
				<span class="inline-flex items-center justify-center ml-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="w-8 h-8"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
						/>
					</svg>
				</span>

				<span class="ml-4 font-semibold tracking-wide truncate">Diário de bordo</span>
			</router-link>

			<router-link to="/documents" class="flex items-center py-3 mr-2 rounded-lg hover:bg-gray-100">
				<span class="inline-flex items-center justify-center ml-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="w-8 h-8"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
						/>
					</svg>
				</span>

				<span class="ml-4 font-semibold tracking-wide truncate">Documentos</span>
			</router-link>

			<div>
				<div
					:class="[isActive ? 'bg-gray-100' : 'bg-white']"
					class="relative flex items-center py-3 mr-2 rounded-lg cursor-pointer hover:bg-gray-100"
					@click="toggleClass"
				>
					<span class="inline-flex items-center justify-center ml-2">
						<svg
							class="w-8 h-8"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path
								d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
							/>
						</svg>
					</span>

					<span class="ml-4 font-semibold tracking-wide truncate">Manutenção</span>

					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="absolute right-0 w-6 h-6 mx-1 cursor-pointer pointer-events-none top-4"
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

				<div :class="[isActive ? 'block' : 'hidden']" class="pl-10">
					<router-link to="/checks" class="flex items-center h-12 mr-2 rounded-lg hover:bg-gray-100">
						<span class="ml-4 font-semibold tracking-wide truncate">Checks de manutenção</span>
					</router-link>

					<router-link to="/components" class="flex items-center h-12 mr-2 rounded-lg hover:bg-gray-100">
						<span class="ml-4 font-semibold tracking-wide truncate">Componentes</span>
					</router-link>

					<router-link to="/guidelines" class="flex items-center h-12 mr-2 rounded-lg hover:bg-gray-100">
						<span class="ml-4 font-semibold tracking-wide truncate">Diretrizes A.D</span>
					</router-link>

					<router-link to="/bulletins" class="flex items-center h-12 mr-2 rounded-lg hover:bg-gray-100">
						<span class="ml-4 font-semibold tracking-wide truncate">Boletin de serviços</span>
					</router-link>
				</div>
			</div>

			<router-link to="/expenses" class="flex items-center py-3 mr-2 rounded-lg hover:bg-gray-100">
				<span class="inline-flex items-center justify-center ml-2">
					<svg
						class="w-8 h-8"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						></path>
					</svg>
				</span>

				<span class="ml-4 font-semibold tracking-wide truncate">Despesas</span>
			</router-link>
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
	::-webkit-scrollbar {
		width: 9px;
	}

	::-webkit-scrollbar-track {
		background-color: transparent;
	}

	::-webkit-scrollbar-thumb {
		background-color: white;

		border: 0px none;

		border-radius: 50px;
	}

	:hover::-webkit-scrollbar-thumb {
		background-color: #a0a0a0;
	}

	::-webkit-scrollbar-track {
		background-color: white;
	}
</style>
