"use client";

export default function SystemLogsPage() {
	return (
		<div className="p-6 space-y-6">
			<h1 className="text-3xl font-bold bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
				System Logs
			</h1>

			<div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
				<ul className="space-y-3 text-sm text-blue-100">
					<li className="p-3 rounded-lg bg-white/5 border border-white/10">
						[2025-09-28 14:33] User{" "}
						<span className="font-semibold">John Doe</span> logged in
					</li>
					<li className="p-3 rounded-lg bg-white/5 border border-white/10">
						[2025-09-28 14:40] Role updated for{" "}
						<span className="font-semibold">Jane Smith</span>
					</li>
					<li className="p-3 rounded-lg bg-white/5 border border-white/10">
						[2025-09-28 15:00] System backup completed
					</li>
				</ul>
			</div>
		</div>
	);
}
