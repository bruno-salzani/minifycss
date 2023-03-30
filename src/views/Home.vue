<template>
	<div class="max-w-4xl mx-auto mt-10">
		<h1 class="text-2xl font-bold mb-4">Minify CSS</h1>
		<div aria-label="File Upload Modal" class="relative p-6 flex flex-col h-full bg-white rounded-lg shadow-xl">
			<label for="file-input" class="block font-bold">
				<header
					class="flex flex-col items-center justify-center py-12 border-2 border-gray-400 border-dashed rounded-lg cursor-pointer hover:bg-blue-50"
				>
					<p class="flex flex-wrap justify-center mb-4 font-semibold text-gray-900">
						<span class="text-gray-600 underline">Click here </span>
						<span class="ml-1"> to select a file</span>
					</p>
					<svg class="text-gray-300 w-12" viewBox="0 0 24 24">
						<path
							fill="currentColor"
							d="M14,13V17H10V13H7L12,8L17,13M19.35,10.03C18.67,6.59 15.64,4 12,4C9.11,4 6.6,5.64 5.35,8.03C2.34,8.36 0,10.9 0,14A6,6 0 0,0 6,20H19A5,5 0 0,0 24,15C24,12.36 21.95,10.22 19.35,10.03Z"
						/>
					</svg>
				</header>
			</label>

			<input id="file-input" type="file" accept=".css" ref="fileInput" @change="onFileChange" class="hidden" />

			<div v-if="fileSize" class="mb-4 mt-6">
				<div class="flex pb-4">
					<button class="" @click="selectFile"></button>
					<div class="flex items-center">
						<svg
							class="h-8 w-8 text-black-500"
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
							<path
								d="M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9 l6.5 -6.5"
							/>
						</svg>
						<div class="flex flex-col pl-2">
							<span class="text-sm font-bold text-gray-700 leading-4">{{ fileName }}</span>
							<p class="text-xs leading-4">Original Weight: {{ fileSize }}</p>
							<p class="text-xs leading-4">Minified Weight: {{ minifiedFileSize }}</p>
						</div>
					</div>
				</div>
			</div>
			<div v-if="minifiedData">
				<button
					class="flex items-center justify-center w-full px-4 py-2 text-white bg-blue-500 rounded-md shadow focus:outline-none"
					@click="downloadMinifiedFile"
				>
					<span class="font-semibold">Download</span>
				</button>
			</div>
		</div>
	</div>
</template>

<script>
	import cleanCSS from 'clean-css';

	export default {
		data() {
			return {
				fileName: '',
				fileSize: null,
				minifiedData: null,
				minifiedFileSize: null,
			};
		},
		methods: {
			selectFile() {
				this.$refs.fileInput.click();
			},
			onFileChange(e) {
				const file = e.target.files[0];
				this.fileName = file.name;
				this.fileSize = this.formatSizeUnits(file.size);

				const reader = new FileReader();
				reader.onload = () => {
					const cssData = reader.result;
					this.minifyCSS(cssData);
				};
				reader.readAsText(file);
			},
			minifyCSS(cssData) {
				const minified = new cleanCSS().minify(cssData);
				this.minifiedData = minified.styles;
				this.minifiedFileSize = this.formatSizeUnits(minified.stats.minifiedSize);
			},
			downloadMinifiedFile() {
				const blob = new Blob([this.minifiedData], { type: 'text/css' });
				const url = URL.createObjectURL(blob);
				const link = document.createElement('a');
				link.href = url;
				link.download = 'minified.css';
				link.click();
			},
			formatSizeUnits(bytes) {
				if (bytes >= 1073741824) {
					return (bytes / 1073741824).toFixed(2) + ' GB';
				}
				if (bytes >= 1048576) {
					return (bytes / 1048576).toFixed(2) + ' MB';
				}
				if (bytes >= 1024) {
					return (bytes / 1024).toFixed(2) + ' KB';
				}
				if (bytes > 1) {
					return bytes + ' bytes';
				}
				if (bytes === 1) {
					return bytes + ' byte';
				}
				return '0 bytes';
			},
		},
	};
</script>
