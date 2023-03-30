<template>
	<div class="col-span-12 bg-white rounded-md shadow lg:col-span-4 md:col-span-6 divider-y">
		<div class="pt-3 pr-4" id="line-chart">
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
						name: 'Desktops',
						data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
					},
				],
				chartOptions: {
					chart: {
						id: 'line-chart',
						type: 'line',
						zoom: {
							enabled: false,
						},
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
						curve: 'straight',
					},
					xaxis: {
						categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
					},
				},
			};
		},
	};
</script>
