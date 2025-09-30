"use client";

import { useAuth } from "@/context/AuthContext";
import { usePathname } from "next/navigation";
import {
	HomeIcon,
	UserGroupIcon,
	CalendarIcon,
	ChartBarIcon,
	DocumentTextIcon,
	CreditCardIcon,
	ChatBubbleLeftRightIcon,
	ShieldCheckIcon,
} from "@heroicons/react/24/outline";

export default function Sidebar() {
	const { user } = useAuth();
	const pathname = usePathname();

	if (!user) return null;

	// Base navigation
	const navigation = [
		{ name: "Dashboard", href: "/dashboard", icon: HomeIcon },
	];

	// Role-specific items
	if (user.role === "doctor") {
		navigation.push(
			{ name: "Appointments", href: "/appointments", icon: CalendarIcon },
			{ name: "Monitoring", href: "/monitoring", icon: ChartBarIcon },
			{ name: "Records", href: "/records", icon: DocumentTextIcon },
			{ name: "Chat", href: "/chat", icon: ChatBubbleLeftRightIcon }
		);
	} else if (user.role === "patient") {
		navigation.push(
			{ name: "Onboarding", href: "/onboarding", icon: UserGroupIcon },
			{ name: "Appointments", href: "/appointments", icon: CalendarIcon },
			{ name: "Billing", href: "/billing", icon: CreditCardIcon },
			{ name: "Chat", href: "/chat", icon: ChatBubbleLeftRightIcon }
		);
	} else if (user.role === "admin") {
		navigation.push(
			{ name: "User Management", href: "/users", icon: UserGroupIcon },
			{ name: "System Logs", href: "/logs", icon: DocumentTextIcon },
			{ name: "Reports", href: "/reports", icon: ChartBarIcon },
			{ name: "Settings", href: "/settings", icon: ShieldCheckIcon }
		);
	}

	return (
		<div className="hidden md:flex md:w-64 md:flex-col">
			<div className="flex flex-col flex-1 min-h-0 bg-white/10 backdrop-blur-md border-r border-white/20 rounded-r-3xl shadow-2xl">
				{/* Logo */}
				<div className="flex items-center h-16 flex-shrink-0 px-6 bg-gradient-to-r from-blue-600 to-cyan-500 shadow-lg">
					<span className="text-white text-xl font-bold tracking-wide">
						MediCare
					</span>
				</div>

				{/* Navigation */}
				<div className="flex-1 flex flex-col overflow-y-auto pt-6 pb-4">
					<nav className="flex-1 px-4 space-y-2">
						{navigation.map((item) => {
							const isActive = pathname === item.href;
							return (
								<a
									key={item.name}
									href={item.href}
									className={`group flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-300 ${
										isActive
											? "bg-gradient-to-r from-blue-500/30 to-cyan-400/30 text-white shadow-md border border-blue-400/30"
											: "text-blue-100/70 hover:bg-white/10 hover:text-white border border-transparent hover:border-white/10"
									}`}>
									<item.icon
										className={`mr-3 flex-shrink-0 h-6 w-6 transition-colors ${
											isActive
												? "text-cyan-300"
												: "text-blue-200 group-hover:text-white"
										}`}
									/>
									{item.name}
								</a>
							);
						})}
					</nav>
				</div>

				{/* User Info */}
				<div className="flex-shrink-0 flex items-center p-4 border-t border-white/20 bg-white/5 backdrop-blur-sm">
					<div className="flex-shrink-0">
						<div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-md">
							<span className="text-white font-medium">
								{user?.name?.charAt(0)}
							</span>
						</div>
					</div>
					<div className="ml-3">
						<p className="text-sm font-medium text-white">{user?.name}</p>
						<p className="text-xs font-medium text-blue-100/70 capitalize">
							{user?.role}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
