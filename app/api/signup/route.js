import { dbConnection } from "@Db/dbConnection";
import User from "@models/User";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req) {
  try {
    await dbConnection();
    const user = await req.json();
    const existingUser = await User.findOne({ email: user.email });
    if (existingUser) {
      return NextResponse.json(
        { message: "user already exisists" },
        { status: 400 }
      );
    }
    const hashedPassword = await bcrypt.hash(user.password, 10);
    const newUser = await User.create({ ...user, password: hashedPassword });
    const token = jwt.sign({ id: newUser._id }, process.env.SECRET_KEY);

    return NextResponse.json(
      { message: "user created successfully" },
      { status: 201 },
      { token }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "internal server error" },
      { status: 500 }
    );
  }
}
