<template>
	<div class="max-w-4xl mx-auto">
		<div>
			<ul class="flex border-b">
				<li class="-mb-px mr-1">
					<a
						class="inline-block border-l border-t border-r rounded-t py-2 px-4 text-gray-700 font-semibold"
						:class="{ 'bg-white text-black': activeTab === 'binaryToDecimal' }"
						href="#"
						@click="activeTab = 'binaryToDecimal'"
						>Binário para Decimal</a
					>
				</li>
				<li class="-mb-px mr-1">
					<a
						class="inline-block border-l border-t border-r rounded-t py-2 px-4 text-gray-700 font-semibold"
						:class="{ 'bg-white text-black': activeTab === 'decimalToBinary' }"
						href="#"
						@click="activeTab = 'decimalToBinary'"
						>Decimal para Binário</a
					>
				</li>
			</ul>
			<div class="p-8 bg-white shadow-md rounded-md">
				<div v-show="activeTab === 'binaryToDecimal'">
					<div class="flex mr-4 w-full" v-show="activeTab === 'binaryToDecimal'">
						<fieldset class="relative z-0 w-full bg-white border border-gray-300 rounded-md">
							<input
								class="block w-full px-3 pt-4 pb-2 mt-0 bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-black"
								type="text"
								placeholder=" "
								v-model="binary"
							/>
							<label class="absolute top-0 pl-4 text-lg text-gray-500 duration-300 pt-2.5 -z-1 origin-0">
								Insira um número binário
							</label>
						</fieldset>
						<button
							class="px-4 ml-2 text-white bg-blue-500 rounded-md focus:outline-none"
							@click="convertToDecimal"
						>
							Converter
						</button>
					</div>
					<div class="mt-4">
						<p class="mb-2">O valor em decimal é:</p>

						<input class="font-bold w-full outline-none" type="text" v-model="decimal" readonly />
					</div>
				</div>
				<div v-show="activeTab === 'decimalToBinary'">
					<div class="flex" v-show="activeTab === 'decimalToBinary'">
						<fieldset class="relative z-0 w-full bg-white border border-gray-300 rounded-md">
							<input
								class="block w-full px-3 pt-4 pb-2 mt-0 bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-black"
								type="text"
								placeholder=" "
								v-model="decimal"
							/>
							<label class="absolute top-0 pl-4 text-lg text-gray-500 duration-300 pt-2.5 -z-1 origin-0">
								Insira um número decimal
							</label>
						</fieldset>

						<button
							class="px-4 ml-2 text-white bg-blue-500 rounded-md focus:outline-none"
							@click="convertToBinary"
						>
							Converter
						</button>
					</div>
					<div class="mt-4">
						<p class="mb-2">O valor em binário é:</p>

						<input class="font-bold outline-none w-full" type="text" v-model="binary" readonly />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				activeTab: 'binaryToDecimal',
				binary: '',
				decimal: '',
			};
		},
		methods: {
			convertToDecimal() {
				const binary = this.binary;
				const decimal = parseInt(binary, 2);
				this.decimal = isNaN(decimal) ? '' : decimal;
			},
			convertToBinary() {
				const decimal = this.decimal;
				const binary = (decimal >>> 0).toString(2);
				this.binary = isNaN(binary) ? '' : binary;
			},
		},
	};
</script>
<style>
	.-z-1 {
		z-index: -1;
	}

	.origin-0 {
		transform-origin: 0%;
	}

	input:focus ~ label,
	input:not(:placeholder-shown) ~ label,
	textarea:focus ~ label,
	textarea:not(:placeholder-shown) ~ label,
	select:focus ~ label,
	select:not([value='']):valid ~ label {
		/* @apply transform; scale-75; -translate-y-6; */
		--tw-translate-x: 0;
		--tw-translate-y: 0;
		--tw-rotate: 0;
		--tw-skew-x: 0;
		--tw-skew-y: 0;
		transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate))
			skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
		--tw-scale-x: 0.75;
		--tw-scale-y: 0.75;
		--tw-translate-y: -0.65rem;
	}

	input:focus ~ fieldset,
	select:focus ~ fieldset {
		border: #0ea5e9;
	}
</style>
