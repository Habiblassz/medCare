"use client";

import { useAuth } from "@/context/AuthContext";
import { redirect } from "next/navigation";
import StatsCard from "@/components/cards/StatsCard";
import {
	UserGroupIcon,
	BriefcaseIcon,
	CalendarIcon,
	ExclamationTriangleIcon,
	PlusCircleIcon,
	ClipboardDocumentListIcon,
} from "@heroicons/react/24/outline";
import { StatsCardProps } from "@/types";

const adminStats: StatsCardProps[] = [
	{
		name: "Total Patients",
		value: "1,245",
		change: "+25",
		changeType: "positive",
		icon: UserGroupIcon,
	},
	{
		name: "Total Doctors",
		value: "84",
		change: "+2",
		changeType: "positive",
		icon: BriefcaseIcon,
	},
	{
		name: "Appointments Today",
		value: "67",
		change: "-5",
		changeType: "negative",
		icon: CalendarIcon,
	},
	{
		name: "Flagged Issues",
		value: "3",
		change: "0",
		changeType: "neutral",
		icon: ExclamationTriangleIcon,
	},
];

const recentUsers = [
	{ id: "P1021", name: "Emily Johnson", role: "Patient", joined: "2h ago" },
	{ id: "D084", name: "Dr. Mark Allen", role: "Doctor", joined: "1d ago" },
	{ id: "P1020", name: "Michael Chen", role: "Patient", joined: "3d ago" },
];

const activityLogs = [
	{
		id: 1,
		action: "User Login",
		detail: "Admin John logged in",
		time: "5m ago",
	},
	{
		id: 2,
		action: "New Patient",
		detail: "Emily Johnson registered",
		time: "2h ago",
	},
	{
		id: 3,
		action: "System Update",
		detail: "Database backup completed",
		time: "6h ago",
	},
];

export default function AdminDashboard() {
	const { user } = useAuth();

	if (user?.role !== "admin") {
		redirect("/dashboard");
	}

	return (
		<div className="space-y-6">
			{/* Welcome Header */}
			<div className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl p-6 transform hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500">
				<div className="flex items-center justify-between">
					<div>
						<h1 className="text-3xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
							Admin Dashboard
						</h1>
						<p className="text-blue-100/70 mt-2 text-lg">
							Welcome back,{" "}
							<span className="text-white font-semibold">{user.name}</span>.
							Here’s the latest system overview.
						</p>
					</div>
					<div className="hidden md:block">
						<div className="bg-purple-500/20 backdrop-blur-sm rounded-xl p-4 border border-purple-400/30">
							<p className="text-purple-100 text-sm">System Status</p>
							<p className="text-white font-semibold">
								All Systems Operational
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Stats Grid */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				{adminStats.map((stat, index) => (
					<StatsCard key={index} {...stat} />
				))}
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
				{/* Recent Users */}
				<div className="lg:col-span-2 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl p-6">
					<div className="flex items-center justify-between mb-6">
						<h3 className="text-xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
							Recent Users
						</h3>
						<button className="bg-blue-500/20 hover:bg-blue-500/30 text-blue-100 px-4 py-2 rounded-xl border border-blue-400/30 transition-all duration-300 transform hover:scale-105">
							View All
						</button>
					</div>
					<div className="space-y-4">
						{recentUsers.map((user) => (
							<div
								key={user.id}
								className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition">
								<div>
									<p className="text-white font-medium">{user.name}</p>
									<p className="text-blue-100/60 text-sm">
										{user.role} • Joined {user.joined}
									</p>
								</div>
								<span className="text-blue-100/80 text-xs">ID: {user.id}</span>
							</div>
						))}
					</div>
				</div>

				{/* Quick Actions */}
				<div className="space-y-6">
					<div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6">
						<h4 className="text-white font-semibold mb-4">Quick Actions</h4>
						<div className="space-y-3">
							<button className="w-full bg-blue-500/20 hover:bg-blue-500/30 text-blue-100 py-3 rounded-xl border border-blue-400/30 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
								<PlusCircleIcon className="h-5 w-5 mr-2" />
								Add User
							</button>
							<button className="w-full bg-green-500/20 hover:bg-green-500/30 text-green-100 py-3 rounded-xl border border-green-400/30 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
								<ClipboardDocumentListIcon className="h-5 w-5 mr-2" />
								Generate Report
							</button>
						</div>
					</div>

					{/* Activity Logs */}
					<div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6">
						<h4 className="text-white font-semibold mb-4">Activity Logs</h4>
						<div className="space-y-3">
							{activityLogs.map((log) => (
								<div
									key={log.id}
									className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/10">
									<div>
										<p className="text-white text-sm">{log.action}</p>
										<p className="text-blue-100/60 text-xs">{log.detail}</p>
									</div>
									<span className="text-blue-200 text-xs">{log.time}</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
