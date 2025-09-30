"use client";

import { useAuth } from "@/context/AuthContext";
import { redirect } from "next/navigation";
import VitalsChart from "@/components/charts/VitalsChart";
import StatsCard from "@/components/cards/StatsCard";
import AppointmentCard from "@/components/cards/AppointmentCard";
import { AppointmentCardProps, StatsCardProps } from "@/types";
import {
	HeartIcon,
	ClockIcon,
	CalendarIcon,
	UserGroupIcon,
} from "@heroicons/react/24/outline";

const patientStats: StatsCardProps[] = [
	{
		name: "Heart Rate",
		value: "72 bpm",
		change: "+2",
		changeType: "positive",
		icon: HeartIcon,
	},
	{
		name: "Blood Pressure",
		value: "120/80",
		change: "-5",
		changeType: "negative",
		icon: HeartIcon,
	},
	{
		name: "Temperature",
		value: "98.6°F",
		change: "0",
		changeType: "neutral",
		icon: HeartIcon,
	},
	{
		name: "Oxygen",
		value: "98%",
		change: "+1",
		changeType: "positive",
		icon: HeartIcon,
	},
];

const upcomingAppointments: AppointmentCardProps[] = [
	{
		id: 1,
		doctor: "Dr. Sarah Smith",
		date: "2024-01-15",
		time: "10:00 AM",
		type: "Regular Checkup",
		department: "General Medicine",
	},
	{
		id: 2,
		doctor: "Dr. Mike Johnson",
		date: "2024-01-20",
		time: "2:30 PM",
		type: "Cardiology",
		department: "Cardiology",
	},
];

export default function PatientDashboard() {
	const { user } = useAuth();

	if (user?.role !== "patient") {
		redirect("/dashboard");
	}

	return (
		<div className="space-y-6">
			{/* Welcome Header */}
			<div className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl p-6 transform hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500">
				<div className="flex items-center justify-between">
					<div>
						<h1 className="text-3xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
							Welcome back, {user.name}!
						</h1>
						<p className="text-blue-100/70 mt-2 text-lg">
							Here's your health overview and upcoming appointments.
						</p>
					</div>
					<div className="hidden md:block">
						<div className="bg-green-500/20 backdrop-blur-sm rounded-xl p-4 border border-green-400/30">
							<p className="text-green-100 text-sm">Health Status</p>
							<p className="text-white font-semibold">Stable</p>
						</div>
					</div>
				</div>
			</div>

			{/* Stats Grid */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				{patientStats.map((stat, index) => (
					<StatsCard key={index} {...stat} />
				))}
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
				{/* Vitals Chart */}
				<div className="lg:col-span-2">
					<div className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl p-6 transform hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 h-full">
						<div className="flex items-center justify-between mb-6">
							<h3 className="text-xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
								Vital Signs Trend
							</h3>
							<div className="flex space-x-2">
								<button className="bg-blue-500/20 hover:bg-blue-500/30 text-blue-100 px-3 py-1 rounded-lg border border-blue-400/30 text-sm transition-all duration-300">
									Weekly
								</button>
								<button className="bg-white/10 hover:bg-white/20 text-white px-3 py-1 rounded-lg border border-white/20 text-sm transition-all duration-300">
									Monthly
								</button>
							</div>
						</div>
						<VitalsChart />
					</div>
				</div>

				{/* Upcoming Appointments */}
				<div className="space-y-6">
					<div className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl p-6 transform hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500">
						<div className="flex items-center justify-between mb-4">
							<h3 className="text-xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
								Upcoming Appointments
							</h3>
							<CalendarIcon className="h-6 w-6 text-blue-300" />
						</div>
						<div className="space-y-4">
							{upcomingAppointments.map((appointment) => (
								<AppointmentCard key={appointment.id} {...appointment} />
							))}
						</div>
					</div>

					{/* Quick Health Tips */}
					<div className="bg-gradient-to-br from-blue-500/20 to-cyan-400/20 backdrop-blur-md rounded-2xl border border-blue-400/30 p-6">
						<h4 className="text-white font-semibold mb-3 flex items-center">
							<HeartIcon className="h-5 w-5 mr-2 text-red-300" />
							Health Tip
						</h4>
						<p className="text-blue-100/80 text-sm">
							Remember to stay hydrated and take your prescribed medications on
							time. Regular exercise and balanced nutrition help maintain stable
							vitals.
						</p>
					</div>
				</div>
			</div>

			{/* Recent Activity */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6">
					<h4 className="text-white font-semibold mb-4 flex items-center">
						<ClockIcon className="h-5 w-5 mr-2 text-blue-300" />
						Recent Activity
					</h4>
					<div className="space-y-3">
						<div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
							<div>
								<p className="text-white text-sm">Blood Test</p>
								<p className="text-blue-100/60 text-xs">2 days ago</p>
							</div>
							<span className="bg-green-500/20 text-green-200 px-2 py-1 rounded-full text-xs">
								Completed
							</span>
						</div>
						<div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
							<div>
								<p className="text-white text-sm">Medication Refill</p>
								<p className="text-blue-100/60 text-xs">1 week ago</p>
							</div>
							<span className="bg-blue-500/20 text-blue-200 px-2 py-1 rounded-full text-xs">
								Processed
							</span>
						</div>
					</div>
				</div>

				<div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6">
					<h4 className="text-white font-semibold mb-4 flex items-center">
						<UserGroupIcon className="h-5 w-5 mr-2 text-purple-300" />
						Care Team
					</h4>
					<div className="space-y-3">
						<div className="flex items-center p-3 bg-white/5 rounded-xl">
							<div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-400 rounded-full flex items-center justify-center mr-3">
								<span className="text-white font-semibold text-sm">SS</span>
							</div>
							<div>
								<p className="text-white text-sm">Dr. Sarah Smith</p>
								<p className="text-blue-100/60 text-xs">Primary Care</p>
							</div>
						</div>
						<div className="flex items-center p-3 bg-white/5 rounded-xl">
							<div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-400 rounded-full flex items-center justify-center mr-3">
								<span className="text-white font-semibold text-sm">MJ</span>
							</div>
							<div>
								<p className="text-white text-sm">Dr. Mike Johnson</p>
								<p className="text-blue-100/60 text-xs">Cardiology</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
