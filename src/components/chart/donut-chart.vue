<template>
	<div class="col-span-12 bg-white rounded-md shadow lg:col-span-4 md:col-span-6 divider-y">
		<div class="pt-4 pr-3" id="donut-chart">
			<apexchart type="donut" height="300" :options="chartOptions" :series="series"></apexchart>
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
		},

		data: function () {
			return {
				series: [5, 5, 5, 5, 5],

				chartOptions: {
					chart: {
						type: 'donut',
					},

					title: {
						text: this.title,
						align: 'left',
						margin: 20,
						offsetX: 20,
						offsetY: -10,
						floating: false,
						style: {
							fontSize: '16px',
							fontWeight: 'bold',
							color: '#263238',
						},
					},
					plotOptions: {
						pie: {
							customScale: 1,
							donut: {
								size: '75%',
							},
							offsetY: -15,
						},
						stroke: {
							colors: undefined,
						},
					},

					labels: ['Categoria', 'Categoria', 'Categoria', 'Categoria', 'Categoria'],

					legend: {
						position: 'left',
						offsetY: 70,
						offsetX: 0,
					},

					responsive: [
						{
							breakpoint: 1280,
							options: {
								plotOptions: {
									pie: {
										donut: {
											labels: {
												show: true,
												name: {},
												value: {},
											},
										},
									},
								},
							},
						},
					],
				},
			};
		},
	};
</script>
