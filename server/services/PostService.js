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
    let value = await dbContext.Post.findById(id);
    if (!value) {
      throw new BadRequest("Invalid Id");
    }
    return value;
  }
  async create(body) {
    return await dbContext.Post.create(body)
  }
  async edit(id, update, email) {
    let post = await dbContext.Post.findById(id);
    if (post.creator != email) {
      throw new UnAuthorized();
    }
    // @ts-ignore
    joke.body = update.body;
    await post.save();
    return post;
  }

  async delete(id, email) {
    let post = await dbContext.Post.findById(id);
    if (post.creator != email) {
      throw new UnAuthorized();
    }
    await dbContext.Post.findByIdAndDelete(post.id);
  }
}
export const postService = new PostService();
