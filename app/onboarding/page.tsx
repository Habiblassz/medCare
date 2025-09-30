"use client";

import { OnboardingForm } from "@/types";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function OnboardingPage() {
	const [step, setStep] = useState(1);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<OnboardingForm>();

	const onSubmit = (data: OnboardingForm) => {
		console.log("Onboarding data:", data);
		alert("Patient onboarding submitted successfully!");
	};

	const nextStep = () => setStep(step + 1);
	const prevStep = () => setStep(step - 1);

	return (
		<div className="max-w-4xl mx-auto space-y-8 p-6">
			{/* Header */}
			<div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg p-6">
				<h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent mb-2">
					Patient Onboarding
				</h1>
				<p className="text-blue-100/80">
					Complete the following steps to register as a new patient
				</p>
			</div>

			{/* Progress Bar */}
			<div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg p-6">
				<div className="flex items-center justify-between mb-4">
					{[1, 2, 3].map((stepNumber) => (
						<div
							key={stepNumber}
							className={`flex items-center ${stepNumber < 3 ? "flex-1" : ""}`}>
							<div
								className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold transition ${
									step >= stepNumber
										? "bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-md"
										: "bg-white/10 border border-white/20 text-blue-100/60"
								}`}>
								{stepNumber}
							</div>
							{stepNumber < 3 && (
								<div
									className={`flex-1 h-1 mx-4 rounded ${
										step > stepNumber
											? "bg-gradient-to-r from-blue-500 to-cyan-400"
											: "bg-white/10"
									}`}
								/>
							)}
						</div>
					))}
				</div>
				<div className="flex justify-between text-sm text-blue-100/70">
					<span>Personal Info</span>
					<span>Medical Info</span>
					<span>Emergency Contact</span>
				</div>
			</div>

			<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
				{/* Step 1: Personal Information */}
				{step === 1 && (
					<div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg p-6 space-y-6">
						<h2 className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
							Personal Information
						</h2>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							{/* First Name */}
							<div>
								<label className="block text-sm font-medium text-blue-100/80 mb-2">
									First Name *
								</label>
								<input
									{...register("personalInfo.firstName", {
										required: "First name is required",
									})}
									className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/20 text-white placeholder-blue-100/40 focus:outline-none focus:ring-2 focus:ring-blue-400"
									placeholder="Enter first name"
								/>
								{errors.personalInfo?.firstName && (
									<p className="text-red-400 text-sm mt-1">
										{errors.personalInfo.firstName.message}
									</p>
								)}
							</div>

							{/* Last Name */}
							<div>
								<label className="block text-sm font-medium text-blue-100/80 mb-2">
									Last Name *
								</label>
								<input
									{...register("personalInfo.lastName", {
										required: "Last name is required",
									})}
									className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/20 text-white placeholder-blue-100/40 focus:outline-none focus:ring-2 focus:ring-blue-400"
									placeholder="Enter last name"
								/>
								{errors.personalInfo?.lastName && (
									<p className="text-red-400 text-sm mt-1">
										{errors.personalInfo.lastName.message}
									</p>
								)}
							</div>

							{/* Date of Birth */}
							<div>
								<label className="block text-sm font-medium text-blue-100/80 mb-2">
									Date of Birth *
								</label>
								<input
									type="date"
									{...register("personalInfo.dateOfBirth", {
										required: "Date of birth is required",
									})}
									className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
								/>
								{errors.personalInfo?.dateOfBirth && (
									<p className="text-red-400 text-sm mt-1">
										{errors.personalInfo.dateOfBirth.message}
									</p>
								)}
							</div>

							{/* Gender */}
							<div>
								<label className="block text-sm font-medium text-blue-100/80 mb-2">
									Gender *
								</label>
								<select
									{...register("personalInfo.gender", {
										required: "Gender is required",
									})}
									className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400">
									<option value="">Select gender</option>
									<option value="male">Male</option>
									<option value="female">Female</option>
									<option value="other">Other</option>
								</select>
								{errors.personalInfo?.gender && (
									<p className="text-red-400 text-sm mt-1">
										{errors.personalInfo.gender.message}
									</p>
								)}
							</div>

							{/* Phone */}
							<div>
								<label className="block text-sm font-medium text-blue-100/80 mb-2">
									Phone Number *
								</label>
								<input
									type="tel"
									{...register("personalInfo.phone", {
										required: "Phone number is required",
									})}
									className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/20 text-white placeholder-blue-100/40 focus:outline-none focus:ring-2 focus:ring-blue-400"
									placeholder="Enter phone number"
								/>
								{errors.personalInfo?.phone && (
									<p className="text-red-400 text-sm mt-1">
										{errors.personalInfo.phone.message}
									</p>
								)}
							</div>

							{/* Email */}
							<div>
								<label className="block text-sm font-medium text-blue-100/80 mb-2">
									Email Address *
								</label>
								<input
									type="email"
									{...register("personalInfo.email", {
										required: "Email is required",
										pattern: {
											value: /^\S+@\S+$/i,
											message: "Invalid email address",
										},
									})}
									className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/20 text-white placeholder-blue-100/40 focus:outline-none focus:ring-2 focus:ring-blue-400"
									placeholder="Enter email address"
								/>
								{errors.personalInfo?.email && (
									<p className="text-red-400 text-sm mt-1">
										{errors.personalInfo.email.message}
									</p>
								)}
							</div>
						</div>

						<div className="flex justify-end">
							<button type="button" onClick={nextStep} className="btn-primary">
								Next
							</button>
						</div>
					</div>
				)}

				{step === 2 && (
					<div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg p-6 space-y-6">
						<h2 className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
							Medical Information
						</h2>

						<div className="grid grid-cols-1 gap-6">
							<div>
								<label className="block text-sm font-medium text-blue-100/80 mb-2">
									Blood Type
								</label>
								<select
									{...register("medicalInfo.bloodType")}
									className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400">
									<option value="">Select blood type</option>
									<option value="A+">A+</option>
									<option value="A-">A-</option>
									<option value="B+">B+</option>
									<option value="B-">B-</option>
									<option value="AB+">AB+</option>
									<option value="AB-">AB-</option>
									<option value="O+">O+</option>
									<option value="O-">O-</option>
								</select>
							</div>

							<div>
								<label className="block text-sm font-medium text-blue-100/80 mb-2">
									Allergies
								</label>
								<textarea
									{...register("medicalInfo.allergies")}
									rows={3}
									className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/20 text-white placeholder-blue-100/40 focus:outline-none focus:ring-2 focus:ring-blue-400"
									placeholder="List any known allergies..."
								/>
							</div>

							<div>
								<label className="block text-sm font-medium text-blue-100/80 mb-2">
									Medical Conditions
								</label>
								<textarea
									{...register("medicalInfo.conditions")}
									rows={3}
									className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/20 text-white placeholder-blue-100/40 focus:outline-none focus:ring-2 focus:ring-blue-400"
									placeholder="List any existing medical conditions..."
								/>
							</div>

							<div>
								<label className="block text-sm font-medium text-blue-100/80 mb-2">
									Current Medications
								</label>
								<textarea
									{...register("medicalInfo.medications")}
									rows={3}
									className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/20 text-white placeholder-blue-100/40 focus:outline-none focus:ring-2 focus:ring-blue-400"
									placeholder="List current medications..."
								/>
							</div>
						</div>

						<div className="flex justify-between">
							<button
								type="button"
								onClick={prevStep}
								className="btn-secondary">
								Previous
							</button>
							<button type="button" onClick={nextStep} className="btn-primary">
								Next
							</button>
						</div>
					</div>
				)}

				{step === 3 && (
					<div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg p-6 space-y-6">
						<h2 className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
							Emergency Contact
						</h2>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div>
								<label className="block text-sm font-medium text-blue-100/80 mb-2">
									Contact Name *
								</label>
								<input
									{...register("emergencyContact.name", {
										required: "Contact name is required",
									})}
									className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/20 text-white placeholder-blue-100/40 focus:outline-none focus:ring-2 focus:ring-blue-400"
									placeholder="Enter contact name"
								/>
								{errors.emergencyContact?.name && (
									<p className="text-red-400 text-sm mt-1">
										{errors.emergencyContact.name.message}
									</p>
								)}
							</div>

							<div>
								<label className="block text-sm font-medium text-blue-100/80 mb-2">
									Relationship *
								</label>
								<input
									{...register("emergencyContact.relationship", {
										required: "Relationship is required",
									})}
									className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/20 text-white placeholder-blue-100/40 focus:outline-none focus:ring-2 focus:ring-blue-400"
									placeholder="e.g., Spouse, Parent, Friend"
								/>
								{errors.emergencyContact?.relationship && (
									<p className="text-red-400 text-sm mt-1">
										{errors.emergencyContact.relationship.message}
									</p>
								)}
							</div>

							<div>
								<label className="block text-sm font-medium text-blue-100/80 mb-2">
									Phone Number *
								</label>
								<input
									type="tel"
									{...register("emergencyContact.phone", {
										required: "Phone number is required",
									})}
									className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/20 text-white placeholder-blue-100/40 focus:outline-none focus:ring-2 focus:ring-blue-400"
									placeholder="Enter phone number"
								/>
								{errors.emergencyContact?.phone && (
									<p className="text-red-400 text-sm mt-1">
										{errors.emergencyContact.phone.message}
									</p>
								)}
							</div>

							<div>
								<label className="block text-sm font-medium text-blue-100/80 mb-2">
									Email Address
								</label>
								<input
									type="email"
									{...register("emergencyContact.email")}
									className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/20 text-white placeholder-blue-100/40 focus:outline-none focus:ring-2 focus:ring-blue-400"
									placeholder="Enter email address"
								/>
							</div>
						</div>

						<div className="flex justify-between">
							<button
								type="button"
								onClick={prevStep}
								className="btn-secondary">
								Previous
							</button>
							<button type="submit" className="btn-primary">
								Complete Onboarding
							</button>
						</div>
					</div>
				)}
			</form>
		</div>
	);
}
