import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const Comment = new Schema(
  {
    postId: { type: ObjectId, ref: "Post", required: true },
    body: { type: String, required: true },
    creatorEmail: { type: String, required: true },
    name: { type: String, required: true }
  }
)
Comment.virtual("creator", {
  localField: "creatorEmail",
  ref: "Profile",
  foreignField: "email",
  justOne: true
});
export default Comment;