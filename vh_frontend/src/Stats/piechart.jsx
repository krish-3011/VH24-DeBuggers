import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class PieChart extends Component {	
	render() {
		const options = {
			animationEnabled: true,
			exportEnabled: false,
			theme: "light1",
			title: {
				text: "Efficiency"
			},
			data: [{
				type: "pie",
				indexLabel: "{label}: {y}%",		
				startAngle: -90,
				dataPoints: [
					{ y: 20, label: "efficiency", color: "rgba(255, 0, 0, 0.5)" }, // Red with 50% transparency
					{ y: 24, color: "white" } // Default color for other slices
				]
			}]
		}
		
		return (
			<div>
				<CanvasJSChart options={options} containerProps={{ width: '380px', height: '300px' }} />
			</div>
		);
	}
}

export default PieChart;
