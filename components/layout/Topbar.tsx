"use client";

import { useAuth } from "@/context/AuthContext";
import { useTheme } from "@/context/ThemeContext";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

export default function Topbar() {
	const { user, logout } = useAuth();
	const { theme, toggleTheme } = useTheme();

	return (
		<header className="bg-white/10 backdrop-blur-md border-b border-white/20 shadow-lg">
			<div className="flex justify-between items-center h-16 px-6">
				{/* Page Title */}
				<div>
					<h1 className="text-2xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
						Welcome back, {user?.name}
					</h1>
					<p className="text-sm text-blue-100/70 capitalize">
						{user?.role} Dashboard
					</p>
				</div>

				{/* Actions */}
				<div className="flex items-center space-x-4">
					{/* Theme Toggle */}
					<button
						onClick={toggleTheme}
						aria-label="Toggle theme"
						className="p-2 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-blue-100/80 hover:text-white transition-all duration-300 shadow-md hover:shadow-blue-500/20">
						{theme === "light" ? (
							<MoonIcon className="h-5 w-5" />
						) : (
							<SunIcon className="h-5 w-5" />
						)}
					</button>

					{/* Logout Button */}
					<button
						onClick={logout}
						className="px-4 py-2 rounded-xl bg-red-500/20 hover:bg-red-500/30 text-red-200 font-medium border border-red-400/30 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-red-500/20 text-sm">
						Logout
					</button>
				</div>
			</div>
		</header>
	);
}
