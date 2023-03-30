<template>
	<div>
		<div class="max-w-4xl mx-auto mt-32">
			<h1 class="text-3xl font-thin mb-3">Minifya CSS</h1>

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
					onclick="minifyCSS()"
				>
					<span class="font-semibold">Minify</span>
				</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		components: {},
		methods: {
			minifyCSS() {
				const input = 'styles.css'; // nome do arquivo CSS que você quer minificar

				const xhr = new XMLHttpRequest();
				xhr.open('GET', input);
				xhr.onreadystatechange = () => {
					if (xhr.readyState === 4 && xhr.status === 200) {
						const css = xhr.responseText;
						const minifiedCSS = new CleanCSS().minify(css).styles;
						const blob = new Blob([minifiedCSS], { type: 'text/css;charset=utf-8' });
						saveAs(blob, 'styles.min.css');
						console.log(`Arquivo styles.min.css gerado com sucesso!`);
					}
				};
				xhr.send();
			},
		},
	};
</script>
