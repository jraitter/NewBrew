import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Post = new Schema(
  {
    title: { type: String, required: true },
    body: { type: String, required: true },
    creatorEmail: { type: String, required: true },
    comments: [{ type: String }]
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

Post.virtual("creator", {
  localField: "creatorEmail",
  ref: "Profile",
  foreignField: "email",
  justOne: true
});

export default Post;
