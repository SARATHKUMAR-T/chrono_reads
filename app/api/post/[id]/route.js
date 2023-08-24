import { dbConnection } from "@Db/dbConnection";
import Post from "@models/post";

// Get
export const GET = async (req, { params }) => {
  try {
    await dbConnection();

    const postdetails = await Post.findById(params.id).populate("creator");
    if (!postdetails) return new Response("Post Not Found", { status: 404 });

    return new Response(JSON.stringify(postdetails), { status: 200 });
  } catch (error) {
    return new Response("Internal Server Error", { status: 500 });
  }
};

// PATCH(update)
export const PATCH = async (req, { params }) => {
  const { post, tag, bookName, authour } = await req.json();

  try {
    await dbConnection();
    const existingPrompt = await Post.findById(params.id);
    if (!existingPrompt) {
      return new Response("Post not found", { status: 404 });
    }
    existingPrompt.post = post;
    existingPrompt.bookName = bookName;
    existingPrompt.authour = authour;
    existingPrompt.tag = tag;
    await existingPrompt.save();

    return new Response(JSON.stringify(existingPrompt), { status: 200 });
  } catch (error) {
    return new Response("Failed to update Post", { status: 500 });
  }
};

// DELETE
export const DELETE = async (req, { params }) => {
  try {
    await dbConnection();
    await Post.findByIdAndDelete(params.id);
    return new Response("Post deleted successfully", { status: 200 });
  } catch (error) {
    return new Response("Failed to delete Post", { status: 500 });
  }
};
