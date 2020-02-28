import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const Comment = new Schema(
  {
    postId: { ObjectId, required: true },
    body: { type: String, required: true },
    userName: { type: String, required: true }
  }
)
Comment.virtual("creator", {
  localField: "userName",
  ref: "Profile",
  foreignField: "userEmail",
  justOne: true
});
export default Comment;