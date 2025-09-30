export interface User {
	id: string;
	name: string;
	email: string;
	role: UserRole;
	avatar?: string;
}

export type UserRole = "patient" | "doctor" | "admin";

export interface StatsCardProps {
	name: string;
	value: string;
	change: string;
	changeType: "positive" | "negative" | "neutral";
}

export interface AppointmentCardProps {
	id: number;
	doctor: string;
	date: string;
	time: string;
	type: string;
	department?: string;
}

export interface Patient {
	id: number;
	name: string;
	condition: string;
	status: "Stable" | "Improving" | "Critical";
	lastVisit: string;
}

// Form types
export interface OnboardingForm {
	personalInfo: {
		firstName: string;
		lastName: string;
		dateOfBirth: string;
		gender: string;
		phone: string;
		email: string;
	};
	medicalInfo: {
		bloodType: string;
		allergies: string;
		conditions: string;
		medications: string;
	};
	emergencyContact: {
		name: string;
		relationship: string;
		phone: string;
		email: string;
	};
}

//status card
export interface StatsCardProps {
	name: string;
	value: string;
	change: string;
	changeType: "positive" | "negative" | "neutral";
	icon?: React.ComponentType<{ className?: string }>;
}

//auth context
export interface AuthContextType {
	user: User | null;
	login: (email: string, password: string) => Promise<boolean>;
	logout: () => void;
	isLoading: boolean;
}

// theme context
export type Theme = "light" | "dark";

export interface ThemeContextType {
	theme: Theme;
	toggleTheme: () => void;
}
