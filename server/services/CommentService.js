import { dbContext } from "../db/DbContext";
import { BadRequest, UnAuthorized } from "../utils/Errors";

class CommentService {
  async findAll(query = {}) {
    let comment = await dbContext.Comment.find(query).populate(
      "creator");
    return comment;
  }
  async findById(id) {
    let comment = await dbContext.Comment.findById(id);
    if (!comment) {
      throw new BadRequest("Invalid Id");
    }
    return comment;
  }
  async getCommentsByPostId(id, email) {
    let comments = await dbContext.Comment.find({ postId: id })
    // if (comments.creatorEmail != email) {
    //   throw new UnAuthorized();
    // }
    return comments;
  }
  async getCommentsByEmail(email) {
    let comments = await dbContext.Comment.find({ creatorEmail: email })
    if (!comments) {
      throw new BadRequest("Invalid email");
    }
    return await comments;
  }
  async create(body) {
    return await dbContext.Comment.create(body)
  }
  async edit(id, update, email) {
    let comment = await dbContext.Comment.findById(id);
    if (comment.creatorEmail != email) {
      throw new UnAuthorized();
    }
    // @ts-ignore
    comment.body = update.body;
    await comment.save();
    return await comment;
  }

  async delete(id, email) {
    let comment = await dbContext.Comment.findById(id);
    if (comment.creatorEmail != email) {
      throw new UnAuthorized();
    }
    await dbContext.Comment.findByIdAndDelete(comment.id);
  }
}
export const commentService = new CommentService();
