import { StatsCardProps } from "@/types";

export default function StatsCard({
	name,
	value,
	change,
	changeType,
	icon: Icon,
}: StatsCardProps) {
	const getChangeColor = () => {
		switch (changeType) {
			case "positive":
				return "text-green-400";
			case "negative":
				return "text-red-400";
			default:
				return "text-blue-300";
		}
	};

	const getBgGradient = () => {
		switch (changeType) {
			case "positive":
				return "from-green-500/20 to-emerald-400/20 border-green-400/30";
			case "negative":
				return "from-red-500/20 to-pink-400/20 border-red-400/30";
			default:
				return "from-blue-500/20 to-cyan-400/20 border-blue-400/30";
		}
	};

	const getChangeIcon = () => {
		if (changeType === "neutral") return "→";
		return changeType === "positive" ? "↗" : "↘";
	};

	return (
		<div
			className={`bg-gradient-to-br ${getBgGradient()} backdrop-blur-md rounded-2xl border p-6 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}>
			<div className="flex items-center justify-between">
				<div>
					{Icon && <Icon className="h-8 w-8 text-white/70 mb-2" />}
					<p className="text-white/70 text-sm font-medium">{name}</p>
					<p className="text-2xl font-bold text-white mt-1">{value}</p>
				</div>
				<div
					className={`text-sm font-semibold ${getChangeColor()} bg-white/10 rounded-full px-3 py-1 backdrop-blur-sm`}>
					{getChangeIcon()} {change}
				</div>
			</div>
		</div>
	);
}
