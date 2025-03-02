import mongoose from "mongoose";

const ExpenseSchema = new mongoose.Schema(
	{
		userId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		icon: { type: String, required: true },
		category: { type: String, required: true }, // Example: Food, Rent etc..
		amount: { type: Number, required: true },
		date: { type: Date, default: Date.now, required: true },
	},
	{ timestamps: true }
);

const Expense = mongoose.model("Expense", ExpenseSchema);
export default Expense;
