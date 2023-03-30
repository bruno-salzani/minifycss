<template>
	<div>
		<div class="max-w-4xl mx-auto mt-32">
			<h1 class="text-3xl font-thin mb-3">HTML Formatter</h1>

			<textarea class="w-full bg-white border border-gray-300 rounded-md" cols="30" rows="10"></textarea>
			<div class="flex justify-between space-x-2">
				<button
					class="px-3 py-2 rounded-md hover:bg-gray-300 focus:shadow-outline focus:outline-none"
					type="button"
				>
					Load File
				</button>
				<button
					class="flex items-center justify-center px-5 py-2 text-white bg-blue-500 rounded-md shadow focus:outline-none"
					type="button"
					@click="Action()"
				>
					<span class="font-semibold">Format</span>
				</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		components: {},
	};
</script>
