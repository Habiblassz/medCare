export default function AppointmentsPage() {
	return (
		<div className="p-6 space-y-6">
			<h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
				Appointments
			</h1>

			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
				{/* Upcoming Appointments */}
				<div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
					<h2 className="text-xl font-semibold text-white mb-4">
						Upcoming Appointments
					</h2>
					<ul className="space-y-3">
						<li className="p-3 rounded-lg bg-white/5 border border-white/10 flex justify-between">
							<span className="text-blue-100">John Doe</span>
							<span className="text-sm text-blue-200">10:00 AM</span>
						</li>
						<li className="p-3 rounded-lg bg-white/5 border border-white/10 flex justify-between">
							<span className="text-blue-100">Jane Smith</span>
							<span className="text-sm text-blue-200">11:30 AM</span>
						</li>
					</ul>
				</div>

				{/* Appointment Stats */}
				<div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
					<h2 className="text-xl font-semibold text-white mb-4">Stats</h2>
					<div className="space-y-4">
						<p className="text-blue-100">
							Today: <span className="font-bold">5</span>
						</p>
						<p className="text-blue-100">
							This Week: <span className="font-bold">18</span>
						</p>
						<p className="text-blue-100">
							This Month: <span className="font-bold">72</span>
						</p>
					</div>
				</div>

				{/* Quick Actions */}
				<div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
					<h2 className="text-xl font-semibold text-white mb-4">
						Quick Actions
					</h2>
					<div className="space-y-3">
						<button className="w-full py-2 px-4 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-medium hover:opacity-90 transition">
							Schedule Appointment
						</button>
						<button className="w-full py-2 px-4 rounded-lg bg-white/10 text-blue-100 font-medium hover:bg-white/20 transition">
							View Calendar
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
