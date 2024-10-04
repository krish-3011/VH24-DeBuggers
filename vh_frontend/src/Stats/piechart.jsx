import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class PieChart extends Component {	
	render() {
		const options = {
			animationEnabled: true,
			exportEnabled: false,
			theme: "light1",
			title:{
				text: "Trip Expenses"
			},
			data: [{
				type: "pie",
				indexLabel: "{label}: {y}%",		
				startAngle: -90,
				dataPoints: [
					{ y: 20, label: "Airfare" },
					{ y: 24, label: "Food & Drinks" },
					{ y: 20, label: "Accomodation" },
					{ y: 14, label: "Transportation" },
					{ y: 12, label: "Activities" },
					{ y: 10, label: "Misc" }	
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
