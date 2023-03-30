<template>
	<div class="flex items-center px-3 mb-3 bg-white rounded-lg shadow cursor-pointer py-2.5 group">
		<div
			class="flex items-center justify-center overflow-hidden text-white bg-gray-300 rounded-full shadow-sm w-14 h-14"
		>
			<slot></slot>
		</div>
		<div class="flex flex-col justify-center ml-3 text-sm">
			<span class="pb-1 font-medium text-black group-hover:underline">{{ title }}</span>
			<div class="flex space-x-2">
				<span class="">{{ firstData }}</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			title: {
				required: true,
				type: String,
			},
			firstData: {
				required: true,
				type: String,
			},
		},
	};
</script>
