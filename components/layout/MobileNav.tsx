"use client";

import { usePathname } from "next/navigation";
import {
	HomeIcon,
	UserGroupIcon,
	CalendarIcon,
	ChartBarIcon,
	DocumentTextIcon,
} from "@heroicons/react/24/outline";

const mobileNavigation = [
	{ name: "Dashboard", href: "/dashboard", icon: HomeIcon },
	{ name: "Onboarding", href: "/onboarding", icon: UserGroupIcon },
	{ name: "Appointments", href: "/appointments", icon: CalendarIcon },
	{ name: "Monitoring", href: "/monitoring", icon: ChartBarIcon },
	{ name: "Records", href: "/records", icon: DocumentTextIcon },
];

export default function MobileNav() {
	const pathname = usePathname();

	return (
		<div className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
			<nav className="flex justify-around items-center h-16">
				{mobileNavigation.map((item) => {
					const isActive = pathname === item.href;
					return (
						<a
							key={item.name}
							href={item.href}
							className={`flex flex-col items-center justify-center flex-1 p-2 ${
								isActive
									? "text-blue-600 dark:text-blue-400"
									: "text-gray-500 dark:text-gray-400"
							}`}>
							<item.icon className="h-6 w-6" />
							<span className="text-xs mt-1">{item.name}</span>
						</a>
					);
				})}
			</nav>
		</div>
	);
}
