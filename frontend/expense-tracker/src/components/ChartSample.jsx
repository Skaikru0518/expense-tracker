import React from "react";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
	Legend,
} from "recharts";

const ChartSample = () => {
	const data = [
		{ name: "Jan", income: 120, expense: 40 },
		{ name: "Feb", income: 150, expense: 80 },
		{ name: "Mar", income: 200, expense: 120 },
		{ name: "Apr", income: 170, expense: 100 },
		{ name: "May", income: 80, expense: 30 },
		{ name: "Jun", income: 190, expense: 90 },
		{ name: "Jul", income: 220, expense: 120 },
	];
	return (
		<div className="bg-white shadow-md rounded-xl p-4">
			<div className="flex justify-between items-center">
				<div>
					<h3 className="text-lg font-semibold text-black">All Transactions</h3>
					<p className="text-sm text-gray-500">2nd Jan to 21th Dec</p>
				</div>
				<button className="px-3 py-1 text-sm font-semibold text-purple-600 border border-purple-500 rounded-lg hover:bg-purple-100">
					View More
				</button>
			</div>

			<ResponsiveContainer width="100%" maxHeight={450} minHeight={350}>
				<BarChart
					data={data}
					margin={{ top: 20, right: 20, left: 0, bottom: 0 }}
				>
					<XAxis dataKey="name" />
					<YAxis />
					<Tooltip />
					<Legend />
					<Bar
						dataKey="income"
						stackId="a"
						fill="#5A32EA"
						radius={[4, 4, 0, 0]}
					/>
					<Bar
						dataKey="expense"
						stackId="a"
						fill="#C3A7FA"
						radius={[4, 4, 0, 0]}
					/>
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
};

export default ChartSample;
