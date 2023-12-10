import { NextResponse } from "next/server";
import connectMongoDB from "../../../libs/mongodb";
import Expense from "../../../models/expense";

export async function POST(request) {
    const { type, cost, description, date } = await request.json();
    await connectMongoDB();
    await Expense.create({ type, cost, description, date });
    return NextResponse.json({ message: 'Expense Created' }, { status: 201 });
}

export async function GET() {
    await connectMongoDB();
    const expenses = await Expense.find();
    return NextResponse.json({ expenses });
}