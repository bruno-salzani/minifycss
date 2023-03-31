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
						<div class="flex items-center flex-shrink-0 py-1 px-2.5">
							<span class="text-2xl font-bold text-gray-700">Bin2Dec</span>
						</div>
					</router-link>
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
