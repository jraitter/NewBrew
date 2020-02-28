import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

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
}

export const postService = new PostService();
