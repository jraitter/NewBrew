import mongoose from "mongoose";
import PostSchema from "../models/Post";
import CommentSchema from "../models/Comment";
import ProfileSchema from "../models/Profile";

class DbContext {
  Post = mongoose.model("Post", PostSchema);
  Profile = mongoose.model("Profile", ProfileSchema);
  Comment = mongoose.model("Comment", CommentSchema);

}

export const dbContext = new DbContext();
