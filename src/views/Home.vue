<template>
	<div class="max-w-4xl mx-auto">
		<!-- Error Message -->
		<div
			v-if="errorMessage"
			class="mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
			role="alert"
		>
			<strong class="font-bold">Error! </strong>
			<span class="block sm:inline">{{ errorMessage }}</span>
			<span class="absolute top-0 bottom-0 right-0 px-4 py-3" @click="errorMessage = null">
				<svg
					class="fill-current h-6 w-6 text-red-500"
					role="button"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
				>
					<title>Close</title>
					<path
						d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
					/>
				</svg>
			</span>
		</div>

		<div
			aria-label="File Upload Modal"
			class="relative flex flex-col h-full"
			@dragover.prevent="isDragging = true"
			@dragleave.prevent="isDragging = false"
			@drop.prevent="onDrop"
		>
			<label
				for="file-input"
				class="block font-bold transition-colors duration-200"
				:class="{ 'bg-blue-50': isDragging }"
			>
				<header
					class="flex flex-col items-center justify-center py-12 border-2 border-dashed rounded-lg cursor-pointer hover:bg-blue-50 transition-colors duration-200"
					:class="isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-400'"
				>
					<p class="flex flex-wrap justify-center mb-4 font-semibold text-gray-900">
						<span class="text-gray-600 underline">Click here </span>
						<span class="ml-1"> or drag and drop a CSS file</span>
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

			<!-- Loading State -->
			<div v-if="isLoading" class="flex justify-center my-6">
				<svg
					class="animate-spin h-8 w-8 text-blue-500"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
				>
					<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
					<path
						class="opacity-75"
						fill="currentColor"
						d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
					></path>
				</svg>
			</div>

			<div v-if="fileSize && !isLoading" class="mb-4 mt-6">
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
			<div v-if="minifiedData && !isLoading" class="flex flex-col sm:flex-row gap-4">
				<button
					class="flex-1 flex items-center justify-center px-4 py-2 text-white bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none transition-colors"
					@click="downloadMinifiedFile"
				>
					<span class="font-semibold">Download</span>
				</button>
				<button
					class="flex-1 flex items-center justify-center px-4 py-2 text-blue-500 bg-white border border-blue-500 rounded-md shadow hover:bg-blue-50 focus:outline-none transition-colors"
					@click="copyToClipboard"
				>
					<span class="font-semibold">{{ copyButtonText }}</span>
				</button>
			</div>
		</div>

		<div class="container mx-auto py-8">
			<h1 class="text-3xl font-bold mb-4">Why Minify CSS Files?</h1>
			<p class="mb-4">
				Minifying CSS files is a technique used to reduce file size, making it lighter and optimized for the
				web. This technique is crucial for websites and web applications that need to be fast and efficient.
			</p>
			<p class="mb-4">
				By minifying a CSS file, it is possible to remove whitespace, comments, and other unnecessary
				information that does not affect the file's functionality. This can result in a reduction of up to 80%
				of the original file size, depending on the amount of whitespace and comments present.
			</p>
			<p class="mb-4">
				In addition to making the file lighter, minification can also improve the performance of the website or
				web application, as the minified file can be loaded more quickly by the user's browser.
			</p>
			<p class="mb-4">
				Another advantage of minification is the possibility of reducing user data consumption, especially on
				mobile devices, where data traffic may be more expensive or limited. A minified CSS file can mean less
				loading time and less data consumed by the user.
			</p>
			<p class="mb-4">
				In summary, CSS file minification is a simple and efficient technique for improving the performance and
				reducing the size of websites and web applications, bringing benefits to both developers and users.
			</p>
		</div>
	</div>
</template>

<script>
	import { formatSizeUnits } from '../utils/css-minifier';

	export default {
		data() {
			return {
				fileName: '',
				fileSize: null,
				minifiedData: null,
				minifiedFileSize: null,
				isDragging: false,
				errorMessage: null,
				isLoading: false,
				copyButtonText: 'Copy to Clipboard',
				worker: null,
			};
		},
		beforeUnmount() {
			if (this.worker) {
				this.worker.terminate();
			}
		},
		methods: {
			selectFile() {
				this.$refs.fileInput.click();
			},
			onDrop(e) {
				this.isDragging = false;
				const files = e.dataTransfer.files;
				if (files.length > 0) {
					this.processFile(files[0]);
				}
			},
			onFileChange(e) {
				const file = e.target.files[0];
				if (file) {
					this.processFile(file);
				}
			},
			processFile(file) {
				this.errorMessage = null;
				this.minifiedData = null;

				if (!file.name.toLowerCase().endsWith('.css')) {
					this.errorMessage = 'Please upload a valid CSS file.';
					return;
				}

				this.isLoading = true;
				this.fileName = file.name;
				this.fileSize = formatSizeUnits(file.size);

				const reader = new FileReader();
				reader.onload = () => {
					const cssData = reader.result;
					this.runWorker(cssData);
				};
				reader.onerror = () => {
					this.errorMessage = 'Error reading file.';
					this.isLoading = false;
				};
				reader.readAsText(file);
			},
			runWorker(cssData) {
				// Initialize worker if not already running
				if (!this.worker) {
					this.worker = new Worker(new URL('../workers/css-minifier.worker.js', import.meta.url), {
						type: 'module',
					});
					this.worker.onmessage = (e) => {
						const { error, styles, stats } = e.data;
						if (error) {
							this.errorMessage = error;
						} else {
							this.minifiedData = styles;
							this.minifiedFileSize = formatSizeUnits(stats.minifiedSize);
						}
						this.isLoading = false;
					};
					this.worker.onerror = (e) => {
						this.errorMessage = 'Worker error: ' + e.message;
						this.isLoading = false;
					};
				}
				// Send data to worker
				this.worker.postMessage(cssData);
			},
			downloadMinifiedFile() {
				if (!this.minifiedData) return;
				const blob = new Blob([this.minifiedData], { type: 'text/css' });
				const url = URL.createObjectURL(blob);
				const link = document.createElement('a');
				link.href = url;
				link.download = `minified-${this.fileName}`;
				link.click();
			},
			async copyToClipboard() {
				if (!this.minifiedData) return;
				try {
					await navigator.clipboard.writeText(this.minifiedData);
					this.copyButtonText = 'Copied!';
					setTimeout(() => {
						this.copyButtonText = 'Copy to Clipboard';
					}, 2000);
				} catch (err) {
					this.errorMessage = 'Failed to copy to clipboard.';
				}
			},
		},
	};
</script>
