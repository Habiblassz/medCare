"use client";

import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
} from "recharts";

const data = [
	{ day: "Mon", patients: 5 },
	{ day: "Tue", patients: 8 },
	{ day: "Wed", patients: 6 },
	{ day: "Thu", patients: 10 },
	{ day: "Fri", patients: 7 },
];

export default function MonitoringPage() {
	return (
		<div className="p-6 space-y-6">
			<h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
				Patient Monitoring
			</h1>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
				{/* Patient Trends */}
				<div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
					<h2 className="text-xl font-semibold text-white mb-4">
						Patient Visits (This Week)
					</h2>
					<div className="h-64">
						<ResponsiveContainer width="100%" height="100%">
							<LineChart data={data}>
								<XAxis dataKey="day" stroke="#aaa" />
								<YAxis stroke="#aaa" />
								<Tooltip />
								<Line
									type="monotone"
									dataKey="patients"
									stroke="#06b6d4"
									strokeWidth={3}
								/>
							</LineChart>
						</ResponsiveContainer>
					</div>
				</div>

				{/* Alerts */}
				<div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
					<h2 className="text-xl font-semibold text-white mb-4">
						Recent Alerts
					</h2>
					<ul className="space-y-3">
						<li className="p-3 bg-red-500/20 rounded-lg border border-red-400/30 text-red-100">
							Patient Alice - High BP detected
						</li>
						<li className="p-3 bg-yellow-500/20 rounded-lg border border-yellow-400/30 text-yellow-100">
							Patient Bob - Missed medication
						</li>
						<li className="p-3 bg-green-500/20 rounded-lg border border-green-400/30 text-green-100">
							Patient Charlie - Recovered normal vitals
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
