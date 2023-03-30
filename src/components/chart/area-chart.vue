<template>
	<div class="col-span-12 bg-white rounded-md shadow lg:col-span-4 md:col-span-6 divider-y">
		<div class="pt-4 pr-3" id="area-chart">
			<apexchart type="area" height="300" :options="chartOptions" :series="series"></apexchart>
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
				series: [
					{
						name: 'series1',
						data: [31, 40, 28, 51, 42, 109, 100],
					},
					{
						name: 'series2',
						data: [11, 32, 45, 32, 34, 52, 41],
					},
				],
				chartOptions: {
					chart: {
						id: 'area-chart',
						type: 'area',
					},
					title: {
						text: this.title,
						align: 'left',
						margin: 10,
						offsetX: 5,
						offsetY: 0,
						floating: false,
						style: {
							fontSize: '16px',
							fontWeight: 'bold',
							color: '#263238',
						},
					},
					dataLabels: {
						enabled: false,
					},
					stroke: {
						curve: 'smooth',
					},
					xaxis: {
						type: 'datetime',
						categories: [
							'2018-09-19T00:00:00.000Z',
							'2018-09-19T01:30:00.000Z',
							'2018-09-19T02:30:00.000Z',
							'2018-09-19T03:30:00.000Z',
							'2018-09-19T04:30:00.000Z',
							'2018-09-19T05:30:00.000Z',
							'2018-09-19T06:30:00.000Z',
						],
					},
					tooltip: {
						x: {
							format: 'dd/MM/yy HH:mm',
						},
					},
				},
			};
		},
	};
</script>
