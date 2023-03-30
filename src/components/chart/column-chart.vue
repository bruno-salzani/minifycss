<template>
	<div class="col-span-12 bg-white rounded-md shadow lg:col-span-4 md:col-span-6 divider-y">
		<div class="pt-3 pr-4" id="column-chart">
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
				series: [
					{
						name: 'Net Profit',
						data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
					},
					{
						name: 'Revenue',
						data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
					},
					{
						name: 'Free Cash Flow',
						data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
					},
				],
				chartOptions: {
					chart: {
						id: 'column-chart',
						type: 'bar',
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
					plotOptions: {
						bar: {
							horizontal: false,
							columnWidth: '55%',
							endingShape: 'rounded',
						},
					},
					dataLabels: {
						enabled: false,
					},
					stroke: {
						show: true,
						width: 2,
						colors: ['transparent'],
					},
					xaxis: {
						categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
					},
					yaxis: {
						title: {
							text: '$ (thousands)',
						},
					},
					fill: {
						opacity: 1,
					},
					tooltip: {
						y: {
							formatter: function (val) {
								return '$ ' + val + ' thousands';
							},
						},
					},
				},
			};
		},
	};
</script>
