"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import {
	EyeIcon,
	EyeSlashIcon,
	LockClosedIcon,
	UserCircleIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

export default function LoginPage() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [error, setError] = useState("");
	const { login, isLoading } = useAuth();
	const router = useRouter();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setError("");

		const success = await login(email, password);
		if (success) {
			router.push("/dashboard");
		} else {
			setError("Invalid email or password. Please try again.");
		}
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 dark:from-gray-900 dark:via-blue-950 dark:to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
			{/* Animated background elements */}
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
				<div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-slate-700/5 rounded-full blur-3xl"></div>
			</div>

			<div className="max-w-md w-full space-y-8 relative z-10">
				{/* Header */}
				<div className="text-center">
					<div className="mx-auto h-20 w-20 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25 mb-6 transform hover:scale-105 transition-transform duration-300">
						<span className="text-white text-2xl font-bold">M</span>
					</div>
					<h1 className="text-4xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent mb-3">
						MediCare
					</h1>
					<p className="text-blue-100/80 text-lg font-light">
						Hospital Management System
					</p>
					<div className="mt-8 p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
						<p className="text-blue-100/70 text-sm">
							Sign in to access your dashboard
						</p>
					</div>
				</div>

				{/* Login Form */}
				<form
					className="mt-8 space-y-6 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl shadow-black/20 p-8 transform hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500"
					onSubmit={handleSubmit}>
					{error && (
						<div className="bg-red-500/10 border border-red-500/20 text-red-200 px-4 py-3 rounded-xl backdrop-blur-sm animate-pulse">
							<div className="flex items-center">
								<div className="w-2 h-2 bg-red-400 rounded-full mr-2 animate-ping"></div>
								{error}
							</div>
						</div>
					)}

					{/* Email Field */}
					<div className="space-y-2">
						<label
							htmlFor="email"
							className="block text-sm font-medium text-blue-100/90">
							Email Address
						</label>
						<div className="relative">
							<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
								<UserCircleIcon className="h-5 w-5 text-blue-300/70" />
							</div>
							<input
								id="email"
								name="email"
								type="email"
								required
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="block w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-blue-200/40 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/30 transition-all duration-300 backdrop-blur-sm"
								placeholder="your.email@hospital.com"
							/>
						</div>
					</div>

					{/* Password Field */}
					<div className="space-y-2">
						<label
							htmlFor="password"
							className="block text-sm font-medium text-blue-100/90">
							Password
						</label>
						<div className="relative">
							<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
								<LockClosedIcon className="h-5 w-5 text-blue-300/70" />
							</div>
							<input
								id="password"
								name="password"
								type={showPassword ? "text" : "password"}
								required
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								className="block w-full pl-10 pr-12 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-blue-200/40 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/30 transition-all duration-300 backdrop-blur-sm"
								placeholder="Enter your password"
							/>
							<button
								type="button"
								className="absolute inset-y-0 right-0 pr-3 flex items-center hover:scale-110 transition-transform duration-200"
								onClick={() => setShowPassword(!showPassword)}>
								{showPassword ? (
									<EyeSlashIcon className="h-5 w-5 text-blue-300/70 hover:text-blue-200 transition-colors" />
								) : (
									<EyeIcon className="h-5 w-5 text-blue-300/70 hover:text-blue-200 transition-colors" />
								)}
							</button>
						</div>
						<p className="text-blue-200/60 text-xs pt-2">
							Demo password: <strong className="text-blue-200">passkey</strong>
						</p>
					</div>

					{/* Submit Button */}
					<div className="pt-4">
						<button
							type="submit"
							disabled={isLoading}
							className="group relative w-full bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 disabled:from-blue-400 disabled:to-cyan-300 text-white font-semibold py-3 px-4 rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 disabled:shadow-none transition-all duration-300 transform hover:scale-[1.02] disabled:scale-100">
							{isLoading ? (
								<div className="flex items-center justify-center">
									<div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
									Signing in...
								</div>
							) : (
								<div className="flex items-center justify-center">
									<span>Sign in to Dashboard</span>
									<svg
										className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M13 7l5 5m0 0l-5 5m5-5H6"
										/>
									</svg>
								</div>
							)}
						</button>
					</div>

					{/* Demo Accounts */}
					<div className="pt-6 border-t border-white/10">
						<p className="text-center text-blue-200/70 text-sm font-medium mb-3">
							Demo Accounts
						</p>
						<div className="grid grid-cols-1 gap-2 text-xs">
							<div className="bg-white/5 rounded-lg p-3 text-center border border-white/5 hover:border-white/10 transition-colors">
								<p className="text-blue-200 font-medium">Patient</p>
								<p className="text-blue-200/60">patient@hospital.com</p>
							</div>
							<div className="bg-white/5 rounded-lg p-3 text-center border border-white/5 hover:border-white/10 transition-colors">
								<p className="text-blue-200 font-medium">Doctor</p>
								<p className="text-blue-200/60">doctor@hospital.com</p>
							</div>
							<div className="bg-white/5 rounded-lg p-3 text-center border border-white/5 hover:border-white/10 transition-colors">
								<p className="text-blue-200 font-medium">Admin</p>
								<p className="text-blue-200/60">admin@hospital.com</p>
							</div>
						</div>
					</div>
				</form>

				{/* Footer */}
				<div className="text-center">
					<p className="text-blue-200/40 text-sm">
						Secure hospital management system • v1.0
					</p>
				</div>
			</div>
		</div>
	);
}
