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
      .get("/:id", this.getById)
      .get("/email/:creatorEmail", this.getPostsByEmail)
      .put("/:id", this.edit)
      .post("", this.create)
      .delete("/:id", this.delete);
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
      req.body.creatorEmail = req.userInfo.email;
      let post = await postService.create(req.body);
      res.send(req.body);
    } catch (error) {
      next(error);
    }
  }
  async getById(req, res, next) {
    try {
      // NOTE NEVER TRUST THE CLIENT TO ADD THE CREATOR ID
      let post = await postService.findById(req.params.id);
      res.send(post);
    } catch (error) {
      next(error);
    }
  }
  async getPostsByEmail(req, res, next) {
    try {
      // NOTE NEVER TRUST THE CLIENT TO ADD THE CREATOR ID
      req.body.creatorEmail = req.userInfo.email;
      let posts = await postService.getPostsByEmail(req.body.creatorEmail);
      res.send(posts);
    } catch (error) {
      next(error);
    }
  }
  async edit(req, res, next) {
    try {
      // NOTE NEVER TRUST THE CLIENT TO ADD THE CREATOR ID
      let post = await postService.edit(
        req.params.id,
        req.body,
        req.userInfo.email
      );
      res.send(post);
    } catch (error) {
      next(error);
    }
  }
  async delete(req, res, next) {
    try {
      // NOTE NEVER TRUST THE CLIENT TO ADD THE CREATOR ID
      await postService.delete(req.params.id, req.userInfo.email);
      res.send("deleted");
    } catch (error) {
      next(error);
    }
  }
}
