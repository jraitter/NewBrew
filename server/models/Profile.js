import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Profile = new Schema(
  {
    subs: [{ type: String, unique: true }],
    userEmail: { type: String, lowercase: true, unique: true },
    userName: { type: String, required: true },
    imgUrl: { type: String }
    // NOTE If you wish to add additional public properties for profiles do so here
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Profile;
