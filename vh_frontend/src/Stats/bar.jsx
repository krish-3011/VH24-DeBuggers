import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
 
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class BarGraph extends Component {
	constructor() {
		super();
		this.toggleDataSeries = this.toggleDataSeries.bind(this);
	}
	toggleDataSeries(e) {
		if(typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
			e.dataSeries.visible = false;
		}
		else {
			e.dataSeries.visible = true;
		}
		this.chart.render();
	}
	render() {
		const options = {
			animationEnabled: true,
			theme: "light2",
			title:{
				text: "Profit Earned"
			},
			axisX: {
				valueFormatString: "DDD"
			},
			axisY: {
				prefix: ""
			},
			toolTip: {
				shared: true
			},
			legend:{
				cursor: "pointer",
				itemclick: this.toggleDataSeries
			},
			data: [{
				type: "stackedBar",
				name: "Meals",
				showInLegend: "true",
				xValueFormatString: "DD, MMM",
				yValueFormatString: "$#,##0",
				dataPoints: [
					{ x: new Date(2018, 5, 25), y: 560 },
					{ x: new Date(2018, 5, 26), y: 450 },
					{ x: new Date(2018, 5, 27), y: 710 },
					{ x: new Date(2018, 5, 28), y: 410 },
					{ x: new Date(2018, 5, 29), y: 600 },
					{ x: new Date(2018, 5, 30), y: 750 },
					{ x: new Date(2018, 6, 1), y: 980 }
				]
			}]
		}
		return (
		<div>
			<CanvasJSChart options = {options} containerProps={{ width: '380px', height: '300px' }} 
				onRef={ref => this.chart = ref}
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}
export default BarGraph;    