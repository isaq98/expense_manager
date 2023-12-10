import mongoose, { Schema } from 'mongoose';

const expenseSchema = new Schema(
    {
        type: String,
        cost: Number,
        description: String,
        date: String
    },
    {
        timestamps: true
    }
);

const Expense = mongoose.model.Expense || mongoose.model("expense", expenseSchema);

export default Expense;