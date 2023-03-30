<template>
	<nav class="fixed top-0 left-0 right-0 z-20 bg-white shadow">
		<div class="px-2 mx-auto max-w-10xl sm:pr-2">
			<div class="relative flex items-center justify-between h-12">
				<div class="absolute inset-y-0 left-0 flex items-center">
					<!-- Mobile menu button-->
					<button
						type="button"
						class="inline-flex items-center justify-center hidden p-2 text-white focus:outline-none"
						aria-controls="mobile-menu"
						aria-expanded="false"
					>
						<span class="sr-only">Open main menu</span>
						<!--
							Icon when menu is closed.

							Heroicon name: outline/menu

							Menu open: "hidden", Menu closed: "block"
						-->
						<svg
							class="block w-6 h-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
						<!--
                    Icon when menu is open.

                    Heroicon name: outline/x

                    Menu open: "block", Menu closed: "hidden"
                -->
						<svg
							class="hidden w-6 h-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
				</div>
				<div class="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
					<router-link to="/">
						<div class="flex items-center flex-shrink-0 py-1 bg-blue-600 border rounded-md px-2.5">
							<span class="text-3xl font-bold text-white">IgniLab</span>
						</div>
					</router-link>
				</div>
				<div
					class="absolute hidden inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
				>
					<div>
						<button
							class="ml-2 text-gray-600 bg-gray-200 rounded-full cursor-pointer p-1.5 hover:bg-gray-300 focus:outline-none focus:bg-blue-500 focus:text-white"
							id="create-btn"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="w-7 h-7"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M12 6v6m0 0v6m0-6h6m-6 0H6"
								/>
							</svg>
						</button>
						<div
							class="absolute right-0 hidden w-64 p-2 overflow-y-auto origin-top-right bg-white rounded-md shadow-2xl mt-2.5 focus:outline-none"
							id="create"
						>
							<div class="flex items-center justify-between px-2 pb-4">
								<h1 class="text-xl font-bold text-gray-800">Nova atividade</h1>
							</div>
							<div class="">
								<router-link
									to="/loogbooks"
									class="flex items-center h-12 rounded-lg hover:bg-gray-100"
								>
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
								<router-link
									to="/documents"
									class="flex items-center h-12 rounded-lg hover:bg-gray-100"
								>
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
									<span class="ml-4 font-semibold tracking-wide truncate">Documento</span>
								</router-link>
								<div>
									<div
										:class="[isActive ? 'bg-gray-100' : 'bg-white']"
										class="relative flex items-center h-12 rounded-lg cursor-pointer hover:bg-gray-100"
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
											class="absolute right-0 w-6 h-6 mx-1 cursor-pointer pointer-events-none top-3"
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
										<router-link
											to="/checks"
											class="flex items-center h-12 rounded-lg hover:bg-gray-100"
										>
											<span class="ml-4 font-semibold tracking-wide truncate"
												>Check de manutenção</span
											>
										</router-link>
										<router-link
											to="/components"
											class="flex items-center h-12 rounded-lg hover:bg-gray-100"
										>
											<span class="ml-4 font-semibold tracking-wide truncate">Componente</span>
										</router-link>
										<router-link
											to="/guideline"
											class="flex items-center h-12 rounded-lg hover:bg-gray-100"
										>
											<span class="ml-4 font-semibold tracking-wide truncate">Diretriz A.D</span>
										</router-link>
										<router-link
											to="/servicebulletins"
											class="flex items-center h-12 rounded-lg hover:bg-gray-100"
										>
											<span class="ml-4 font-semibold tracking-wide truncate"
												>Service Bulletin</span
											>
										</router-link>
									</div>
								</div>
								<router-link to="/expenses" class="flex items-center h-12 rounded-lg hover:bg-gray-100">
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
											<line x1="12" y1="3" x2="12" y2="21" />
											<line x1="9" y1="21" x2="15" y2="21" />
											<polyline points="3 6 6 7 12 5 18 7 21 6" />
											<path d="M6 7l-3 9a5 5 0 0 0 6 0l-3 -9" />
											<path d="M18 7l-3 9a5 5 0 0 0 6 0l-3 -9" />
										</svg>
									</span>
									<span class="ml-4 font-semibold tracking-wide truncate">Despesa</span>
								</router-link>
							</div>
						</div>
					</div>
					<div>
						<button
							class="ml-2 text-gray-600 bg-gray-200 rounded-full cursor-pointer p-1.5 hover:bg-gray-300 focus:outline-none focus:bg-blue-500 focus:text-white"
							id="notification-btn"
						>
							<svg
								class="w-7 h-7"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								aria-hidden="false"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
								/>
							</svg>
						</button>
						<div
							class="absolute right-0 hidden p-2 overflow-y-auto origin-top-right bg-white rounded-md shadow-2xl w-96 mt-2.5 focus:outline-none"
							id="notifications"
						>
							<div class="flex items-center justify-between px-2 pb-4">
								<h1 class="text-xl font-bold">Notificações</h1>
								<router-link to="/notifications">
									<span class="text-sm font-medium text-blue-500">Ver tudo</span>
								</router-link>
							</div>
							<ul>
								<router-link
									to="/activity/id"
									class="relative flex px-2 py-3 rounded-lg cursor-pointer hover:bg-gray-100"
								>
									<div class="relative">
										<span
											class="absolute p-1 text-white bg-red-400 rounded-full -right-2 -bottom-1"
										>
											<svg class="w-5 h-5" viewBox="0 0 24 24">
												<path
													fill="currentColor"
													d="M13.78 15.3L19.78 21.3L21.89 19.14L15.89 13.14L13.78 15.3M17.5 10.1C17.11 10.1 16.69 10.05 16.36 9.91L4.97 21.25L2.86 19.14L10.27 11.74L8.5 9.96L7.78 10.66L6.33 9.25V12.11L5.63 12.81L2.11 9.25L2.81 8.55H5.62L4.22 7.14L7.78 3.58C8.95 2.41 10.83 2.41 12 3.58L9.89 5.74L11.3 7.14L10.59 7.85L12.38 9.63L14.2 7.75C14.06 7.42 14 7 14 6.63C14 4.66 15.56 3.11 17.5 3.11C18.09 3.11 18.61 3.25 19.08 3.53L16.41 6.2L17.91 7.7L20.58 5.03C20.86 5.5 21 6 21 6.63C21 8.55 19.45 10.1 17.5 10.1Z"
												/>
											</svg>
										</span>
									</div>
									<div class="flex flex-col justify-center w-full pr-4 ml-4 text-sm">
										<span class="font-semibold text-gray-800">Manutenção em PT-GAV</span>
										<span class="text-gray-800"> Manutenção necessária em 30 dias </span>
										<span class="text-xs font-semibold text-blue-600">Há 3 dias</span>
									</div>
									<span class="absolute w-3 h-3 bg-blue-600 rounded-full right-2 top-8"></span>
								</router-link>
								<router-link
									to="/activity/id"
									class="relative flex px-2 py-3 rounded-lg cursor-pointer hover:bg-gray-100"
								>
									<div class="relative">
										<span
											class="absolute p-1 text-white bg-red-400 rounded-full -right-2 -bottom-1"
										>
											<svg class="w-5 h-5" viewBox="0 0 24 24">
												<path
													fill="currentColor"
													d="M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M15,18V16H6V18H15M18,14V12H6V14H18Z"
												/>
											</svg>
										</span>
									</div>
									<div class="flex flex-col justify-center w-full pr-4 ml-4 text-sm">
										<span class="font-semibold text-gray-800">Documento de PT-GAV</span>
										<span class="text-gray-800"> Renovação necessária em 30 dias </span>
										<span class="text-xs font-semibold text-blue-600">Há 4 dias</span>
									</div>
									<span class="absolute w-3 h-3 bg-blue-600 rounded-full right-2 top-8"></span>
								</router-link>
								<router-link
									to="/activity/id"
									class="relative flex px-2 py-3 rounded-lg cursor-pointer hover:bg-gray-100"
								>
									<div class="relative">
										<span
											class="absolute p-1 text-white bg-yellow-400 rounded-full -right-2 -bottom-1"
										>
											<svg class="w-5 h-5" viewBox="0 0 24 24">
												<path
													fill="currentColor"
													d="M13.78 15.3L19.78 21.3L21.89 19.14L15.89 13.14L13.78 15.3M17.5 10.1C17.11 10.1 16.69 10.05 16.36 9.91L4.97 21.25L2.86 19.14L10.27 11.74L8.5 9.96L7.78 10.66L6.33 9.25V12.11L5.63 12.81L2.11 9.25L2.81 8.55H5.62L4.22 7.14L7.78 3.58C8.95 2.41 10.83 2.41 12 3.58L9.89 5.74L11.3 7.14L10.59 7.85L12.38 9.63L14.2 7.75C14.06 7.42 14 7 14 6.63C14 4.66 15.56 3.11 17.5 3.11C18.09 3.11 18.61 3.25 19.08 3.53L16.41 6.2L17.91 7.7L20.58 5.03C20.86 5.5 21 6 21 6.63C21 8.55 19.45 10.1 17.5 10.1Z"
												/>
											</svg>
										</span>
									</div>
									<div class="flex flex-col justify-center w-full pr-4 ml-4 text-sm">
										<span class="font-semibold text-gray-400">Manutenção em PT-GAV</span>
										<span class="text-gray-400"> Manutenção necessária em 60 dias </span>
										<span class="text-xs text-gray-400">Há 5 dias</span>
									</div>
								</router-link>
								<router-link
									to="/activity/id"
									class="relative flex px-2 py-3 rounded-lg cursor-pointer hover:bg-gray-100"
								>
									<div class="relative">
										<span
											class="absolute p-1 text-white bg-yellow-400 rounded-full -right-2 -bottom-1"
										>
											<svg class="w-5 h-5" viewBox="0 0 24 24">
												<path
													fill="currentColor"
													d="M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M15,18V16H6V18H15M18,14V12H6V14H18Z"
												/>
											</svg>
										</span>
									</div>
									<div class="flex flex-col justify-center w-full pr-4 ml-4 text-sm">
										<span class="font-semibold text-gray-800">Documento de PT-GAV</span>
										<span class="text-gray-800"> Renovação necessária em 60 dias </span>
										<span class="text-xs font-semibold text-blue-600">Há 5 dias</span>
									</div>
									<span class="absolute w-3 h-3 bg-blue-600 rounded-full right-2 top-8"></span>
								</router-link>
								<router-link
									to="/activity/id"
									class="relative flex px-2 py-3 rounded-lg cursor-pointer hover:bg-gray-100"
								>
									<div class="relative">
										<span
											class="absolute p-1 text-white bg-blue-400 rounded-full -right-2 -bottom-1"
										>
											<svg class="w-5 h-5" viewBox="0 0 24 24">
												<path
													fill="currentColor"
													d="M21,16V14L13,9V3.5A1.5,1.5 0 0,0 11.5,2A1.5,1.5 0 0,0 10,3.5V9L2,14V16L10,13.5V19L8,20.5V22L11.5,21L15,22V20.5L13,19V13.5L21,16Z"
												/>
											</svg>
										</span>
									</div>
									<div class="flex flex-col justify-center w-full pr-4 ml-4 text-sm">
										<span class="font-semibold text-gray-400">Voo de PT-GAV</span>
										<span class="text-gray-400"> O voo agendado ocorrerá em 3 dias </span>
										<span class="text-xs text-gray-400">Há 5 dias</span>
									</div>
								</router-link>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
	export default {
		props: {
			title: {
				required: false,
				type: String,
				default: '',
			},
		},

		data() {
			return {
				isNotificationsHidden: true,
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
	#notification-btn:focus + #notifications {
		display: block;
	}

	#notifications:hover {
		display: block;
	}
	#create-btn:focus + #create {
		display: block;
	}

	#create:hover {
		display: block;
	}
</style>
