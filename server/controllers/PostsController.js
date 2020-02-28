import express from "express";
import BaseController from "../utils/BaseController";
import { postService } from "../services/PostService";
import auth0Provider from "@bcwdev/auth0Provider";

export class PostsController extends BaseController {
  constructor() {
    super("api/posts");
    this.router = express
      .Router()
      .get("", this.getAll)
      // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      .use(auth0Provider.getAuthorizedUserInfo)
      .post("", this.create);
  }
  async getAll(req, res, next) {
    try {
      let posts = await postService.findAll();
      return res.send(posts);
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      // NOTE NEVER TRUST THE CLIENT TO ADD THE CREATOR ID
      req.body.email = req.user.email;
      res.send(req.body);
    } catch (error) {
      next(error);
    }
  }
}
