import express from "express";
import BaseController from "../utils/BaseController";
import { postService } from "../services/PostService";
import { commentService } from "../services/CommentService";
import auth0Provider from "@bcwdev/auth0Provider";


export class CommentsController extends BaseController {
  constructor() {
    super("api/comments");
    this.router = express
      .Router()
      .get("", this.getAll)
      // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      .get("/:id", this.getById)
      .use(auth0Provider.getAuthorizedUserInfo)
      .get("/email/:creatorEmail", this.getCommentsByEmail)
      .put("/:id", this.edit)
      .post("", this.create)
      .delete("/:id", this.delete);
  }
  async getAll(req, res, next) {
    try {
      let comments = await commentService.findAll();
      return res.send(comments);
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      // NOTE NEVER TRUST THE CLIENT TO ADD THE CREATOR ID
      req.body.creatorEmail = req.userInfo.email;
      let comment = await commentService.create(req.body);
      res.send(req.body);
    } catch (error) {
      next(error);
    }
  }
  async getById(req, res, next) {
    try {
      // NOTE NEVER TRUST THE CLIENT TO ADD THE CREATOR ID
      let comment = await commentService.findById(req.params.id);
      res.send(comment);
    } catch (error) {
      next(error);
    }
  }

  async getCommentsByEmail(req, res, next) {
    try {
      // NOTE NEVER TRUST THE CLIENT TO ADD THE CREATOR ID
      req.body.creatorEmail = req.userInfo.email;
      let comments = await commentService.getCommentsByEmail(req.body.creatorEmail);
      res.send(comments);
    } catch (error) {
      next(error);
    }
  }
  async edit(req, res, next) {
    try {
      // NOTE NEVER TRUST THE CLIENT TO ADD THE CREATOR ID
      let comment = await commentService.edit(
        req.params.id,
        req.body,
        req.userInfo.email
      );
      res.send(comment);
    } catch (error) {
      next(error);
    }
  }
  async delete(req, res, next) {
    try {
      // NOTE NEVER TRUST THE CLIENT TO ADD THE CREATOR ID
      await commentService.delete(req.params.id, req.userInfo.email);
      res.send("deleted");
    } catch (error) {
      next(error);
    }
  }
}
