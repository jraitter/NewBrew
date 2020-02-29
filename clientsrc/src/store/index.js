import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import router from "../router";
import { STATES } from "mongoose";

Vue.use(Vuex);

let baseUrl = location.host.includes("localhost")
  ? "http://localhost:3000/"
  : "/";

let api = Axios.create({
  baseURL: baseUrl + "api",
  timeout: 3000,
  withCredentials: true
});

export default new Vuex.Store({
  state: {
    profile: {},
    posts: [],
    activePost: {},
    comments: []
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    setPosts(state, posts) {
      state.posts = posts;
    },
    setActivePost(state, post) {
      state.activePost = post;
    },
    setComments(state, comments) {
      state.comments = comments;
    },
    deletePost(state, id) {
      state.posts = state.posts.filter(p => p._id != id)
    },
    addPost(state, post) {
      state.posts.push(post);
    },
    addComment(state, comment) {
      state.comments.push(comment)
    },
    deleteComment(state, id) {
      state.comments = state.comments.filter(c => c._id != id)
    }
  },
  actions: {
    setBearer({ }, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },
    async getProfile({ commit }) {
      try {
        let res = await api.get("profiles");
        commit("setProfile", res.data);
      } catch (error) {
        console.error(error);
      }
    },
    async getCommentsByPostId({ commit, dispatch }, id) {
      try {
        let res = await api.get("posts/" + id + "/comments");
        commit("setComments", res.data);
      } catch (e) {
        console.error(e)
      }
    },
    async getPostsByCreatorEmail({ commit, dispatch }, email) {
      try {
        let res = await api.get("posts/email/" + email);
        commit("setPosts", res.data);
      } catch (e) {
        console.error(e)
      }
    },
    async getAllPosts({ commit, dispatch }) {
      try {
        let res = await api.get("posts");
        commit("setPosts", res.data)
      } catch (e) {
        console.error(e);
      }
    },
    async getPostById({ commit, dispatch }, id) {
      try {
        let res = await api.get("posts/" + id);
        commit("setActivePost", res.data)
      } catch (e) {
        console.error(e);
      }
    },
    setActivePost({ commit }, post) {
      commit("setActivePost", post)
    },
    async createComment({ commit, dispatch }, comment) {
      console.log(comment)
      let res = await api.post("comments", comment)
      dispatch("getCommentsByPostId", comment.postId)
    },
    async createPost({ commit, dispatch }, post) {
      console.log(post)
      let res = await api.post("posts", post)
      dispatch("getPostsByCreatorEmail", post.email)
    },
    async editPostUpCount({ commit, dispatch }, update) {
      let res = await api.put(("posts/" + update.id), update.upCount)
      dispatch("getCommentsByPostId", update.id)
    },
    async editPostDownCount({ commit, dispatch }, update) {
      let res = await api.put(("posts/" + update.id), update.downCount)
      dispatch("getCommentsByPostId", update.id)
    },
    async deletePost({ commit, dispatch }, id) {
      try {
        let res = await api.delete("posts/" + id);
        commit("deletePost", id)
        commit("setActivePost", {})
        router.push({
          name: "Home"
        })
      } catch (error) {
        console.error(error)
      }
    },
    async deleteComment({ commit, dispatch }) {

    }


  }
});
