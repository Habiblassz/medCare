"use client";

export default function UserManagementPage() {
	return (
		<div className="p-6 space-y-6">
			<h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
				User Management
			</h1>

			<div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
				<table className="w-full text-left border-collapse">
					<thead>
						<tr className="text-blue-100 border-b border-white/20">
							<th className="p-3">Name</th>
							<th className="p-3">Email</th>
							<th className="p-3">Role</th>
							<th className="p-3">Actions</th>
						</tr>
					</thead>
					<tbody>
						<tr className="text-white hover:bg-white/10">
							<td className="p-3">John Doe</td>
							<td className="p-3">john@example.com</td>
							<td className="p-3 capitalize">doctor</td>
							<td className="p-3 space-x-2">
								<button className="px-3 py-1 rounded-lg bg-blue-500/30 hover:bg-blue-500/50 text-blue-100 text-sm">
									Edit
								</button>
								<button className="px-3 py-1 rounded-lg bg-red-500/30 hover:bg-red-500/50 text-red-100 text-sm">
									Remove
								</button>
							</td>
						</tr>
						<tr className="text-white hover:bg-white/10">
							<td className="p-3">Jane Smith</td>
							<td className="p-3">jane@example.com</td>
							<td className="p-3 capitalize">patient</td>
							<td className="p-3 space-x-2">
								<button className="px-3 py-1 rounded-lg bg-blue-500/30 hover:bg-blue-500/50 text-blue-100 text-sm">
									Edit
								</button>
								<button className="px-3 py-1 rounded-lg bg-red-500/30 hover:bg-red-500/50 text-red-100 text-sm">
									Remove
								</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
