import Post from "@models/post";
import { dbConnection } from "@Db/dbConnection";

export const GET = async (req, { params }) => {
  try {
    await dbConnection();

    const post = await Post.find({ creator: params.id }).populate("creator");
    if (!post) return new Response("Prompt Not Found", { status: 404 });

    return new Response(JSON.stringify(post), { status: 200 });
  } catch (error) {
    return new Response("Internal Server Error", { status: 500 });
  }
};
