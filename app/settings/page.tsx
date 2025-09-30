"use client";

export default function SettingsPage() {
	return (
		<div className="p-6 space-y-6">
			<h1 className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent">
				System Settings
			</h1>

			<div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg space-y-4">
				<div>
					<label className="block text-blue-100/80 mb-1">System Name</label>
					<input
						type="text"
						defaultValue="MediCare"
						className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/20 text-white placeholder-blue-100/40"
					/>
				</div>

				<div>
					<label className="block text-blue-100/80 mb-1">Support Email</label>
					<input
						type="email"
						defaultValue="support@medicare.com"
						className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/20 text-white placeholder-blue-100/40"
					/>
				</div>

				<button className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-medium hover:opacity-90 transition">
					Save Changes
				</button>
			</div>
		</div>
	);
}
