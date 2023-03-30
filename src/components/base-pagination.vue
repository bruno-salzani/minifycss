<template>
	<div class="px-6 py-3">
		<div class="flex flex-col items-center">
			<div class="flex text-gray-700">
				<div class="flex items-center justify-center w-8 h-8 mr-1 rounded-full cursor-pointer">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="100%"
						height="100%"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="w-4 h-4 feather feather-chevron-left"
					>
						<polyline points="15 18 9 12 15 6"></polyline>
					</svg>
				</div>
				<div class="flex h-8 font-medium rounded-full">
					<div
						class="items-center justify-center hidden w-8 leading-5 transition duration-150 ease-in rounded-full cursor-pointer md:flex hover:bg-blue-500 hover:text-white"
					>
						1
					</div>
					<div
						class="items-center justify-center hidden w-8 leading-5 transition duration-150 ease-in rounded-full cursor-pointer md:flex hover:bg-blue-500 hover:text-white"
					>
						...
					</div>
					<div
						class="items-center justify-center hidden w-8 leading-5 transition duration-150 ease-in rounded-full cursor-pointer md:flex hover:bg-blue-500 hover:text-white"
					>
						3
					</div>
					<div
						class="items-center justify-center hidden w-8 leading-5 text-white transition duration-150 ease-in bg-blue-500 rounded-full cursor-pointer md:flex"
					>
						4
					</div>
					<div
						class="items-center justify-center hidden w-8 leading-5 transition duration-150 ease-in rounded-full cursor-pointer md:flex hover:bg-blue-500 hover:text-white"
					>
						5
					</div>
					<div
						class="items-center justify-center hidden w-8 leading-5 transition duration-150 ease-in rounded-full cursor-pointer md:flex hover:bg-blue-500 hover:text-white"
					>
						...
					</div>
					<div
						class="items-center justify-center hidden w-8 leading-5 transition duration-150 ease-in rounded-full cursor-pointer md:flex hover:bg-blue-500 hover:text-white"
					>
						15
					</div>
					<div
						class="flex items-center justify-center w-8 h-8 leading-5 text-white transition duration-150 ease-in bg-blue-500 rounded-full cursor-pointer md:hidden"
					>
						4
					</div>
				</div>
				<div class="flex items-center justify-center w-8 h-8 ml-1 rounded-full cursor-pointer">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="100%"
						height="100%"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="w-4 h-4 feather feather-chevron-right"
					>
						<polyline points="9 18 15 12 9 6"></polyline>
					</svg>
				</div>
			</div>
		</div>
	</div>
</template>
