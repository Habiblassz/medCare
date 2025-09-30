"use client";

import { useAuth } from "@/context/AuthContext";
import { redirect } from "next/navigation";

export default function Dashboard() {
	const { user } = useAuth();

	if (!user) {
		redirect("/");
	}

	// Redirect based on role
	if (user.role === "patient") {
		redirect("/chat/patient");
	} else if (user.role === "doctor") {
		redirect("/chat/doctor");
	}

	return (
		<div className="flex items-center justify-center min-h-96">
			<div className="text-center">
				<div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent mx-auto mb-4"></div>
				<p className="text-blue-100/70">Redirecting to your chat...</p>
			</div>
		</div>
	);
}
