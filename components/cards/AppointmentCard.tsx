import { AppointmentCardProps } from "@/types";
import { CalendarIcon, ClockIcon, UserIcon } from "@heroicons/react/24/outline";

export default function AppointmentCard({
	doctor,
	date,
	time,
	type,
	department,
}: AppointmentCardProps) {
	return (
		<div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-4 transform hover:scale-105 transition-all duration-300 group">
			<div className="flex items-start justify-between">
				<div className="flex-1">
					<div className="flex items-center mb-2">
						<UserIcon className="h-4 w-4 text-blue-300 mr-2" />
						<h4 className="font-semibold text-white">{doctor}</h4>
					</div>
					<div className="flex items-center text-blue-100/70 text-sm mb-1">
						<CalendarIcon className="h-4 w-4 mr-2" />
						{date} at {time}
					</div>
					<div className="flex items-center text-blue-100/60 text-sm">
						<ClockIcon className="h-4 w-4 mr-2" />
						{type}
					</div>
					{department && (
						<div className="mt-2">
							<span className="bg-blue-500/20 text-blue-200 px-2 py-1 rounded-full text-xs">
								{department}
							</span>
						</div>
					)}
				</div>
				<button className="bg-blue-500/20 hover:bg-blue-500/30 text-blue-100 px-4 py-2 rounded-lg border border-blue-400/30 transition-all duration-300 transform group-hover:scale-110 text-sm">
					View
				</button>
			</div>
		</div>
	);
}
