import { dbConnect } from "@/db/dbConnect";
import User from "@/db/models/User";
import { NextResponse } from "next/server";

export async function POST(req:any) {
  try {
    await dbConnect();
    const { email } = await req.json();
    const user = await User.findOne({ email }).select("_id");
    console.log("user: ", user);
    return NextResponse.json({ user });
  } catch (error) {
    console.log(error);
  }
}