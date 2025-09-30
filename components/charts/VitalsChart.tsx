"use client";

import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	Filler
);

const vitalsData = {
	labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
	datasets: [
		{
			label: "Heart Rate (bpm)",
			data: [72, 75, 70, 68, 72, 74, 73],
			borderColor: "rgb(59, 130, 246)",
			backgroundColor: "rgba(59, 130, 246, 0.1)",
			fill: true,
			tension: 0.4,
		},
		{
			label: "Oxygen (%)",
			data: [98, 97, 99, 98, 97, 98, 99],
			borderColor: "rgb(34, 197, 94)",
			backgroundColor: "rgba(34, 197, 94, 0.1)",
			fill: true,
			tension: 0.4,
		},
	],
};

const options = {
	responsive: true,
	plugins: {
		legend: {
			position: "top" as const,
		},
		title: {
			display: false,
		},
	},
	scales: {
		y: {
			beginAtZero: false,
		},
	},
};

export default function VitalsChart() {
	return <Line data={vitalsData} options={options} />;
}
