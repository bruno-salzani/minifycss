<template>
	<div class="col-span-12 bg-white rounded-md shadow lg:col-span-4 md:col-span-6 divider-y">
		<div class="pt-3 pr-4" id="bar-chart">
			<apexchart type="bar" height="300" :options="chartOptions" :series="series"></apexchart>
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
				chartOptions: {
					chart: {
						id: 'bar-chart',
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
					xaxis: {
						categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
					},
				},
				series: [
					{
						name: 'series-1',
						data: [30, 40, 35, 50, 49, 60, 70, 91],
					},
				],
			};
		},
	};
</script>
