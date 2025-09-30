export default function RecordsPage() {
	return (
		<div className="p-6 space-y-6">
			<h1 className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent">
				Medical Records
			</h1>

			<div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
				<table className="w-full text-left border-collapse">
					<thead>
						<tr className="text-blue-100 border-b border-white/20">
							<th className="p-3">Patient</th>
							<th className="p-3">Condition</th>
							<th className="p-3">Last Updated</th>
							<th className="p-3">Actions</th>
						</tr>
					</thead>
					<tbody>
						<tr className="text-white hover:bg-white/10">
							<td className="p-3">John Doe</td>
							<td className="p-3">Diabetes</td>
							<td className="p-3">Sep 28, 2025</td>
							<td className="p-3">
								<button className="px-3 py-1 rounded-lg bg-blue-500/30 hover:bg-blue-500/50 text-blue-100 text-sm">
									View
								</button>
							</td>
						</tr>
						<tr className="text-white hover:bg-white/10">
							<td className="p-3">Jane Smith</td>
							<td className="p-3">Hypertension</td>
							<td className="p-3">Sep 25, 2025</td>
							<td className="p-3">
								<button className="px-3 py-1 rounded-lg bg-blue-500/30 hover:bg-blue-500/50 text-blue-100 text-sm">
									View
								</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
