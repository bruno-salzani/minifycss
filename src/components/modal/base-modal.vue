<template>
	<div>
		<span
			class="fixed inset-0 z-20 flex items-center justify-center pt-6 bg-white sm:bg-black sm:bg-opacity-70 md:px-0 sm:pt-0"
			@click="close"
		></span>
		<div class="fixed top-0 z-30 max-w-lg mr-16 bg-white rounded-lg right-1/3 sm:top-24">
			<div class="flex items-center justify-between py-2 pl-4 pr-1 border-b">
				<span class="text-lg">{{ type }}</span>
				<button
					id="btn-close"
					class="flex items-center text-gray-500 rounded-full p-1.5 hover:bg-gray-200 focus:outline-none"
					@click="close"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="w-6 h-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
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
			<div class="overflow-y-auto" style="height: 540px">
				<div class="relative">
					<div class="w-full bg-gray-300 h-36">
						<slot name="bg"></slot>
					</div>
					<div
						class="absolute top-0 flex items-center justify-center w-32 h-32 overflow-hidden bg-gray-300 border-4 border-white rounded-full mt-7"
						style="left: 36%"
					>
						<slot name="img"></slot>
					</div>
					<div class="flex justify-center py-3 border-b">
						<span class="text-xl font-bold text-black">{{ title }}</span>
					</div>
				</div>
				<div class="px-2 mx-auto divide-y">
					<slot name="content"></slot>
				</div>
			</div>
			<div class="p-2 border-t">
				<router-link
					to="/user/id"
					class="flex items-center justify-center w-full py-2 text-white bg-blue-500 rounded-md focus:outline-none"
				>
					<span class="font-semibold">Acessar</span>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'BaseModal',

		props: {
			type: {
				required: true,
				type: String,
			},
			title: {
				required: true,
				type: String,
			},
		},

		methods: {
			close() {
				this.$emit('close');
			},
		},
	};
</script>
