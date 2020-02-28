import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Post = new Schema(
  {
    title: { type: String, required: true },
    body: { type: String, required: true },
    userEmail: { type: String, required: true },
    comments: [{ type: String }]
  },
  { timestamps: true, toJSON: { virtuals: true } }
);


export default Post;
