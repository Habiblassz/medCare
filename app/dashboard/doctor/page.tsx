"use client";

import { useAuth } from "@/context/AuthContext";
import { redirect } from "next/navigation";
import StatsCard from "@/components/cards/StatsCard";
import { Patient, StatsCardProps } from "@/types";
import {
	UserGroupIcon,
	ClockIcon,
	CalendarIcon,
	ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";

const doctorStats: StatsCardProps[] = [
	{
		name: "Today's Patients",
		value: "12",
		change: "+3",
		changeType: "positive",
		icon: UserGroupIcon,
	},
	{
		name: "Pending Reviews",
		value: "5",
		change: "-2",
		changeType: "negative",
		icon: ClockIcon,
	},
	{
		name: "Appointments",
		value: "8",
		change: "+1",
		changeType: "positive",
		icon: CalendarIcon,
	},
	{
		name: "Emergency Cases",
		value: "2",
		change: "0",
		changeType: "neutral",
		icon: ExclamationTriangleIcon,
	},
];

const recentPatients: Patient[] = [
	{
		id: 1,
		name: "John Doe",
		condition: "Hypertension",
		status: "Stable",
		lastVisit: "2 hours ago",
	},
	{
		id: 2,
		name: "Jane Smith",
		condition: "Diabetes",
		status: "Improving",
		lastVisit: "4 hours ago",
	},
	{
		id: 3,
		name: "Bob Johnson",
		condition: "Asthma",
		status: "Critical",
		lastVisit: "1 hour ago",
	},
	{
		id: 4,
		name: "Alice Brown",
		condition: "Migraine",
		status: "Stable",
		lastVisit: "3 hours ago",
	},
];

export default function DoctorDashboard() {
	const { user } = useAuth();

	if (user?.role !== "doctor") {
		redirect("/dashboard");
	}

	return (
		<div className="space-y-6">
			{/* Welcome Header */}
			<div className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl p-6 transform hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500">
				<div className="flex items-center justify-between">
					<div>
						<h1 className="text-3xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
							Doctor Dashboard
						</h1>
						<p className="text-blue-100/70 mt-2 text-lg">
							Welcome back,{" "}
							<span className="text-white font-semibold">Dr. {user.name}</span>.
							Here's your schedule and patient overview.
						</p>
					</div>
					<div className="hidden md:block">
						<div className="bg-blue-500/20 backdrop-blur-sm rounded-xl p-4 border border-blue-400/30">
							<p className="text-blue-100 text-sm">Current Shift</p>
							<p className="text-white font-semibold">8:00 AM - 6:00 PM</p>
						</div>
					</div>
				</div>
			</div>

			{/* Stats Grid */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				{doctorStats.map((stat, index) => (
					<StatsCard key={index} {...stat} />
				))}
			</div>

			{/* Recent Patients */}
			<div className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl p-6 transform hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500">
				<div className="flex items-center justify-between mb-6">
					<h3 className="text-xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
						Recent Patients
					</h3>
					<button className="bg-blue-500/20 hover:bg-blue-500/30 text-blue-100 px-4 py-2 rounded-xl border border-blue-400/30 transition-all duration-300 transform hover:scale-105">
						View All
					</button>
				</div>
				<div className="overflow-x-auto">
					<table className="w-full">
						<thead>
							<tr className="border-b border-white/10">
								<th className="text-left py-4 px-4 text-blue-100/80 font-semibold text-sm uppercase tracking-wider">
									Patient
								</th>
								<th className="text-left py-4 px-4 text-blue-100/80 font-semibold text-sm uppercase tracking-wider">
									Condition
								</th>
								<th className="text-left py-4 px-4 text-blue-100/80 font-semibold text-sm uppercase tracking-wider">
									Status
								</th>
								<th className="text-left py-4 px-4 text-blue-100/80 font-semibold text-sm uppercase tracking-wider">
									Last Visit
								</th>
								<th className="text-left py-4 px-4 text-blue-100/80 font-semibold text-sm uppercase tracking-wider">
									Action
								</th>
							</tr>
						</thead>
						<tbody className="divide-y divide-white/5">
							{recentPatients.map((patient) => (
								<tr
									key={patient.id}
									className="hover:bg-white/5 transition-colors duration-200 group">
									<td className="py-4 px-4">
										<div className="flex items-center">
											<div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mr-3">
												<span className="text-white font-semibold text-sm">
													{patient.name
														.split(" ")
														.map((n) => n[0])
														.join("")}
												</span>
											</div>
											<div>
												<p className="text-white font-medium">{patient.name}</p>
												<p className="text-blue-100/60 text-sm">
													ID: {patient.id.toString().padStart(4, "0")}
												</p>
											</div>
										</div>
									</td>
									<td className="py-4 px-4">
										<p className="text-blue-100/80">{patient.condition}</p>
									</td>
									<td className="py-4 px-4">
										<span
											className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm border ${
												patient.status === "Critical"
													? "bg-red-500/20 text-red-200 border-red-500/30"
													: patient.status === "Stable"
													? "bg-green-500/20 text-green-200 border-green-500/30"
													: "bg-yellow-500/20 text-yellow-200 border-yellow-500/30"
											}`}>
											{patient.status}
										</span>
									</td>
									<td className="py-4 px-4">
										<p className="text-blue-100/60">{patient.lastVisit}</p>
									</td>
									<td className="py-4 px-4">
										<button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg border border-white/20 transition-all duration-300 transform group-hover:scale-105">
											Review
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>

			{/* Quick Actions */}
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				<div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6">
					<h4 className="text-white font-semibold mb-4">Quick Actions</h4>
					<div className="space-y-3">
						<button className="w-full bg-blue-500/20 hover:bg-blue-500/30 text-blue-100 py-3 rounded-xl border border-blue-400/30 transition-all duration-300 transform hover:scale-105">
							New Prescription
						</button>
						<button className="w-full bg-green-500/20 hover:bg-green-500/30 text-green-100 py-3 rounded-xl border border-green-400/30 transition-all duration-300 transform hover:scale-105">
							Schedule Appointment
						</button>
						<button className="w-full bg-purple-500/20 hover:bg-purple-500/30 text-purple-100 py-3 rounded-xl border border-purple-400/30 transition-all duration-300 transform hover:scale-105">
							View Medical Records
						</button>
					</div>
				</div>

				<div className="md:col-span-2 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6">
					<h4 className="text-white font-semibold mb-4">Today's Schedule</h4>
					<div className="space-y-4">
						<div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
							<div>
								<p className="text-white font-medium">Morning Rounds</p>
								<p className="text-blue-100/60 text-sm">8:00 AM - 10:00 AM</p>
							</div>
							<span className="bg-blue-500/20 text-blue-200 px-3 py-1 rounded-full text-sm">
								In Progress
							</span>
						</div>
						<div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
							<div>
								<p className="text-white font-medium">Consultation Hours</p>
								<p className="text-blue-100/60 text-sm">10:30 AM - 4:00 PM</p>
							</div>
							<span className="bg-green-500/20 text-green-200 px-3 py-1 rounded-full text-sm">
								Upcoming
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
