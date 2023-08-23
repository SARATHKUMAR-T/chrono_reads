import { dbConnection } from "@Db/dbConnection";
import User from "@models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req) {
  try {
    await dbConnection();
    const input = await req.json();

    const userExsists = await User.findOne({ email: input.email });

    if (!userExsists) {
      return NextResponse.json(
        { message: "User Cannot Find. Please Create New Account" },
        { status: 400 }
      );
    } else {
      //check password match or not
      const verify = await bcrypt.compare(input.password, userExsists.password);

      if (!verify)
        return NextResponse.json(
          { message: "invalid credentials" },
          { status: 500 }
        );

      const token = jwt.sign({ id: userExsists._id }, process.env.SECRET_KEY);

      return NextResponse.json(
        {
          message: "Loggedin Successfully",
          token,
          user: { name: userExsists.name, email: userExsists.email },
        },
        { status: 201 }
      );
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "internal server error" },
      { status: 500 }
    );
  }
}
