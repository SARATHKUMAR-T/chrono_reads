import { Schema, model, models } from "mongoose";

const postSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  post: {
    type: String,
    required: true,
  },
  bookName: {
    type: String,
  },
  authour: {
    type: String,
  },
  tag: {
    type: String,
    required: true,
  },
});

const Post = models.Post || model("Post", postSchema);
export default Post;
