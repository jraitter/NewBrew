import { dbContext } from "../db/DbContext";
import { BadRequest, UnAuthorized } from "../utils/Errors";

class PostService {
  async findAll(query = {}) {
    let post = await dbContext.Post.find(query).populate(
      "creator",
      "name picture"
    );
    return post;
  }
  async findById(id) {
    let post = await dbContext.Post.findById(id);
    if (!post) {
      throw new BadRequest("Invalid Id");
    }
    return post;
  }
  async getPostsByEmail(email) {
    let posts = await dbContext.Post.find({ creatorEmail: email })
    if (!posts) {
      throw new BadRequest("Invalid email");
    }
    return posts;
  }
  async create(body) {
    return await dbContext.Post.create(body)
  }
  async edit(id, update, email) {
    let post = await dbContext.Post.findById(id);
    if (post.creatorEmail != email) {
      throw new UnAuthorized();
    }
    // @ts-ignore
    // post.body = update.body || post.body;
    // post.upCount = update.upCount || post.upCount;
    // post.downCount = update.downCount || post.downCount;
    // post.title = update.title || post.title;
    // post.comments = update.comments || post.comments;

    for (let prop in update) {
      post[prop] = update[prop];
    }

    await post.save();
    return post;
  }

  async delete(id, email) {
    let post = await dbContext.Post.findById(id);
    if (post.creatorEmail != email) {
      throw new UnAuthorized();
    }
    await dbContext.Post.findByIdAndDelete(post.id);
  }
}
export const postService = new PostService();
