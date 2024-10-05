import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
//var CanvasJSReact = require('@canvasjs/react-charts');

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class LineGraph extends Component {
	render() {
		const options = {
			animationEnabled: true,
			title: {
				text: "Rating"
			},
			axisX: {
				valueFormatString: "MMM"
			},
			axisY: {
				title: "",
				prefix: "",
				minimum: 1,  // Set the minimum value of Y-axis to 1
				maximum: 5   // Set the maximum value of Y-axis to 5
			},
			data: [{
				yValueFormatString: "",
				xValueFormatString: "MMMM",
				type: "spline",
				dataPoints: [
					{ x: new Date(2017, 0), y: 2 },
					{ x: new Date(2017, 1), y: 4 },
					{ x: new Date(2017, 2), y: 3.5 },
					{ x: new Date(2017, 3), y: 1.5 },
					{ x: new Date(2017, 4), y: 4.8 },
					{ x: new Date(2017, 5), y: 3 },
					{ x: new Date(2017, 6), y: 4.5 },
					{ x: new Date(2017, 7), y: 2.8 },
					{ x: new Date(2017, 8), y: 4.1 },
					{ x: new Date(2017, 9), y: 3.2 },
					{ x: new Date(2017, 10), y: 2.5 },
					{ x: new Date(2017, 11), y: 4 }
				]
			}]
		}
		return (
		<div>
			<CanvasJSChart options = {options} containerProps={{ width: '380px', height: '300px' }} 
			/>
			
		</div>
		);
	}
}

export default LineGraph;
