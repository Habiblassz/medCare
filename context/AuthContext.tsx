"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { AuthContextType, User } from "@/types";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const mockUsers: User[] = [
	{
		id: "1",
		name: "John Patient",
		email: "patient@hospital.com",
		role: "patient",
	},
	{
		id: "2",
		name: "Dr. Sarah Smith",
		email: "doctor@hospital.com",
		role: "doctor",
	},
	{
		id: "3",
		name: "Admin User",
		email: "admin@hospital.com",
		role: "admin",
	},
	{
		id: "99999999",
		name: "Lassz",
		email: "lassz@admin.role",
		role: "admin",
	},
];

export function AuthProvider({ children }: { children: React.ReactNode }) {
	const [user, setUser] = useState<User | null>(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const savedUser = localStorage.getItem("user");
		if (savedUser) {
			setUser(JSON.parse(savedUser));
		}
		setIsLoading(false);
	}, []);

	const login = async (email: string, password: string): Promise<boolean> => {
		setIsLoading(true);

		// Simulate API call
		await new Promise((resolve) => setTimeout(resolve, 1000));

		const foundUser = mockUsers.find((u) => u.email === email);
		if (foundUser && password === "passkey") {
			setUser(foundUser);
			localStorage.setItem("user", JSON.stringify(foundUser));
			setIsLoading(false);
			return true;
		}

		setIsLoading(false);
		return false;
	};

	const logout = () => {
		setUser(null);
		localStorage.removeItem("user");
	};

	return (
		<AuthContext.Provider value={{ user, login, logout, isLoading }}>
			{children}
		</AuthContext.Provider>
	);
}

export function useAuth() {
	const context = useContext(AuthContext);
	if (context === undefined) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return context;
}
