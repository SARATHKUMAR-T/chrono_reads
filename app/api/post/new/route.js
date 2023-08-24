import { dbConnection } from "@Db/dbConnection";
import Post from "@models/post";

export const POST = async request => {
  const { userId, bookName, authour, post, tag } = await request.json();
  try {
    await dbConnection();

    const newPost = new Post({
      bookName: bookName,
      authour: authour,
      tag: tag,
      post: post,
      creator: userId,
    });
    await newPost.save();
    return new Response(JSON.stringify(newPost), {
      status: 201,
    });
  } catch (error) {
    return new Response("Failed to create a new post", {
      status: 500,
    });
  }
};
