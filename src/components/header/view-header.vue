<template>
	<div class="relative overflow-hidden bg-white shadow bg-gradient-to-t mb-3.5">
		<div class="max-w-lg px-2 mx-auto sm:px-0 sm:max-w-xl md:max-w-3xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl">
			<div class="w-full h-40 overflow-hidden bg-gray-200 rounded-b-lg">
				<slot name="background"></slot>
			</div>
			<div
				class="absolute top-0 flex items-center justify-center w-32 h-32 mt-12 overflow-hidden bg-gray-200 border-4 border-white rounded-full ml-2.5"
				style="left: 45%"
			>
				<slot name="icon"></slot>
			</div>
			<div class="flex justify-center pb-3 pt-3.5">
				<slot name="title"></slot>
			</div>
			<div class="relative flex border-t border-gray-300">
				<slot name="tabs"></slot>
				<slot name="actions"></slot>
			</div>
		</div>
	</div>
</template>

<script></script>
