export default function PatientBillingPage() {
	return (
		<div className="p-6 space-y-6">
			<h1 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
				My Bills
			</h1>
			<p className="text-gray-600 dark:text-gray-300">
				Check your medical bills, payment history, and download invoices.
			</p>

			<div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">
				<p className="text-gray-500 dark:text-gray-400">
					🧾 Patient billing history will go here.
				</p>
			</div>
		</div>
	);
}
