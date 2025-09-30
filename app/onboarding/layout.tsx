"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";
import MobileNav from "@/components/layout/MobileNav";

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const { user, isLoading } = useAuth();
	const router = useRouter();

	useEffect(() => {
		if (!isLoading && !user) {
			router.push("/");
		}
	}, [user, isLoading, router]);

	if (isLoading) {
		return (
			<div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center">
				<div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent"></div>
			</div>
		);
	}

	if (!user) {
		return null;
	}

	return (
		<div className="flex h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
			{/* Sidebar - Desktop */}
			<Sidebar />

			{/* Main Content */}
			<div className="flex-1 flex flex-col overflow-hidden">
				<Topbar />

				{/* Mobile Navigation */}
				<MobileNav />

				{/* Page Content */}
				<main className="flex-1 overflow-auto p-4 md:p-6 backdrop-blur-sm">
					{children}
				</main>
			</div>
		</div>
	);
}
