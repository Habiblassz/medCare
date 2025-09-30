"use client";

export default function ReportsPage() {
	return (
		<div className="p-6 space-y-6">
			<h1 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
				Reports
			</h1>

			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
				<div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
					<h2 className="text-lg font-semibold text-white mb-2">User Growth</h2>
					<p className="text-blue-100/80">+120 new users this month</p>
				</div>

				<div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
					<h2 className="text-lg font-semibold text-white mb-2">
						Appointments
					</h2>
					<p className="text-blue-100/80">340 scheduled this week</p>
				</div>

				<div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
					<h2 className="text-lg font-semibold text-white mb-2">Revenue</h2>
					<p className="text-blue-100/80">$12,500 this month</p>
				</div>
			</div>
		</div>
	);
}
